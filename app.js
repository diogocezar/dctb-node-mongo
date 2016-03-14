var NodeMongo = {
    App : {
        Schema : null,
        Mongoose : null,
    },
    Blog : {
        Schema : null,
        Model  : null,
        SchemaStructure : {
            title : String,
            body  : String,
            date  : Date
        },
        Sample : {
            title : "foo",
            body  : "bar",
            date  : new Date()
            
        }
    },
    init: function(){
        NodeMongo.App.Mongoose = require('mongoose');
        NodeMongo.App.Mongoose.connect('mongodb://0.0.0.0/database');
        NodeMongo.App.Schema  = NodeMongo.App.Mongoose.Schema;
        NodeMongo.Blog.Schema = new NodeMongo.App.Schema(NodeMongo.Blog.SchemaStructure);
        NodeMongo.Blog.Model  = NodeMongo.App.Mongoose.model('BlogPost', NodeMongo.Blog.Schema);
    },
    add: function(){
        var BlogPost = new NodeMongo.Blog.Model(NodeMongo.Blog.Sample);
        BlogPost.save(function(err){
            if(!err)
                return console.log('created');
            else
                return console.log(err);
        });
    },
    list: function(){
        return NodeMongo.Blog.Model.find(function(err, BlogPostsList){
            if (!err)
                return console.log(BlogPostsList);
            else
			    return console.log(err);
        });
    }
}

NodeMongo.init();
NodeMongo.add();
NodeMongo.list();
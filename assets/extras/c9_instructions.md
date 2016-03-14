# Intruções para a Instalação do MongoDB no c9.io

O MongoDB está préinstalado em seu workspace.

Para iniciar o MongoDB, siga os comandos abaixo.

```
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > start_mongod.sh
$ chmod a+x mongod
```

Os dados serão armazenados na pasta data.

Parâmetros utilizados:

```
--dbpath=data - Because it defaults to /var/db (which isn't accessible)
--nojournal - Because mongodb usually pre-allocates 2 GB journal file (which exceeds Cloud9 disk space quota)
--bind_ip=$IP - Because you can't bind to 0.0.0.0
--rest - Runs on default port 28017
```
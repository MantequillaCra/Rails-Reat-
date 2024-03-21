# README

## Este es un Blog usando Rails como API y la libreria react
### Dependecias 
>   * Ruby 3.3.0
>   * Rails 7.1.3.2
>   * Sqlite3 3.43.2
>   * NodeJS 20.11.1
>   * Yarn 1.22.21
    
### Inicializacion:
Selecciona la carpeta del programa en la terminal:  

    cd ...#directorio_de_carpeta#/q
Añade las gemas:

    bundle install
Crea , migra y añade datos usando la gema faker:

        rails db:create
        rails db:migrate
        rails db:seed
Inicia un servidor local de Rails: 
>**__Si no se inicia el servidor local de Rails, la aplicacion de REACT no mostrara informacion.__**

        rails server
Abre la carpeta cliente en tu terminal:

        cd ...#directorio_de_carpeta#/q/client
Inicia el servidor local de react:

        npm run dev

# lab4actions-A

Previamente editouse os ficheiros:

* prod.env ==> (produción) coa organización  ***debian***
* dev.env  ==> (desenvolvemento)coa organización ***openStreetMap***
* /home/belay/gitcurso/lab4actions-A/src/core/theme/theme.ts ==> Para mudar a cor do CSS. 
* /home/belay/gitcurso/lab4actions-A/src/assets/logo.png ==> logotipo 
* 


```bash 
npm i
npm run clean 

#Creamos o paquete para despregar
npm run build:prod

```
Logo de empaquetar xérase no directorio **dist** a aplicación para publicar co entorno de produción. Se desexas coa configuración de desenvolvemento sería 

```
npm run build:dev 

```
Logo crearás unha rama **gh-pages** isto disparará que se despregue o contido da rama como unha aplicación en GitHubPages


E finalmente borras o contido da rama **gh-pages** e só deixas o contido do directorio  **dist** que é o que se despregará.

 

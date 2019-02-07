
## install angular CLI
- ```npm install -g @angular/cli```

## create a new Angualr project 
- ```cd``` to your projects folder
- ```ng new demo-app```
- ```cd demo-app```

## install bootstrap 3 in the module
- ```npm install --save bootstrap@3```

## or install bootstrap 4 in the module
- ```npm install --save bootstrap```

## start a dev web server 
- ```ng serve```
> this. can be stopped using [ctrl-c]

## include bootstrap across all modules in project
In the project root, edit angular.json file.  In the JSON file, at ```/projects/architect/build/options/styles```, add as the first node at that location ```"node_modules/bootstrap/dist/css/bootstrap.min.css",```.

## to add a new components
```cd``` to the project folder and run the following command
- ```ng generate component new-component-name```

or in short form
- ```ng g c new-component-name```

## Angular templates have a few syntactical features
- ```[ property ]``` designates property binding
- ```( target )``` - designates event binding
- ```[( target )]``` - designates two way data binding
- ```{{ ... }}``` designates string interpolation 

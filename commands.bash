

ToDoApp

npx sequelize-cli db:create

npx sequelize-cli model:generate --name User --attributes email:string,password:string

npx sequelize-cli model:generate --name Task --attributes task:string,isComplete:boolean,userId:integer

PAUSE: update the models and the migration files with the files I fixed

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name user
npx sequelize-cli seed:generate --name task

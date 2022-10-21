
# npx sequelize-cli init
# npx sequelize-cli db:migrate
# npx sequelize-cli db:create
# npx sequelize-cli db:drop
# npx sequelize-cli db:generate
# npx sequelize-cli migration:generate
# npx sequelize-cli model:generate


npm i sequelize pg
npm i --save-dev sequelize-cli

npx sequelize-cli init

npx sequelize-cli model:generate --name User --attributes 'email:string,password:string'

npx sequelize-cli model:generate --name Task --attributes 'email:string,
task:string,isComplete:boolean'

npx sequelize-cli db:create

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name user

npx sequelize-cli db:seed --seed 20221015171347-user.js

npx sequelize-cli db:seed --seed 20221018043553-tasks.js

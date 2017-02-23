const Recettes = new Mongo.Collection('recettes');

const Schemas = {};

Schemas.Recettes = new SimpleSchema({
  user_id:{
    type: String
  },
  name:{
    type: String,
    max: 100
  },
  category:{
    type: String
  },
  ingredients:{
    type: String
  },
  description:{
    type: String
  },
  images:{
    type: String
  },
  public:{
    type: Boolean
  }
});

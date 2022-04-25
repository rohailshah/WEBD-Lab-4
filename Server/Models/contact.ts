/* Lab 4 - WEBD 6201
   Rohail Shah
   100492683
   April 24, 2022 */

   import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

const ContactSchema = new Schema
({
    FullName: String,
    ContactNumber: String,
    EmailAddress: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;
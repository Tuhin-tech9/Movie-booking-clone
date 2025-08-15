import { Inngest } from "inngest";
import UseR from "../models/User.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-bookings" });
///inggest function to svae the data in database
const User=inngest.createFunction(
    {id:'sync-user-from-clerk'},
    {event:'clerk/user.created'},

    async ({event})=>{
         const{id,first_name,last_name,email_address,image_url}=event.data
         const Userdata={
            _id:id,
            email:email_address[0].email_address,
            name:first_name+ ' '+last_name,
            image:image_url
         }
         await UseR.create(Userdata)
    }

) 


// ingest function to delete data from database
const Userdeletion=inngest.createFunction(
    {id:'delete-user-with-clerk'},
    {event:'clerk/user.deleted'},

    async ({event})=>{
         const{id}=event.data

         await UseR.findByIdAndDelete(id)
    }

) 
//ingest function to update data from database
const Userupdation=inngest.createFunction(
    {id:'update-user-from-clerk'},
    {event:'clerk/user.updated'},

    async ({event})=>{
       const{id,first_name,last_name,email_address,image_url}=event.data
        const Userdata={
            _id:id,
            email:email_address[0].email_address,
            name:first_name+ ' '+last_name,
            image:image_url
         }
        await UseR.findByIdAndUpdate(id,Userdata)
    }

) 
// Create an empty array where we'll export future Inngest functions
export const functions = [User,Userdeletion,Userupdation];
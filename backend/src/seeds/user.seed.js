import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
   {
    email: "ariana.jameson@example.com",
    fullName: "Ariana Jameson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "lucy.sanders@example.com",
    fullName: "Lucy Sanders",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "clara.bennett@example.com",
    fullName: "Clara Bennett",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "grace.martinez@example.com",
    fullName: "Grace Martinez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "zara.johnson@example.com",
    fullName: "Zara Johnson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "ella.smith@example.com",
    fullName: "Ella Smith",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "lily.davis@example.com",
    fullName: "Lily Davis",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "mia.hall@example.com",
    fullName: "Mia Hall",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "jackson.carter@example.com",
    fullName: "Jackson Carter",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "noah.miller@example.com",
    fullName: "Noah Miller",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "ryan.thompson@example.com",
    fullName: "Ryan Thompson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "maxwell.brown@example.com",
    fullName: "Maxwell Brown",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "ethan.wilson@example.com",
    fullName: "Ethan Wilson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "luke.martin@example.com",
    fullName: "Luke Martin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "dylan.moore@example.com",
    fullName: "Dylan Moore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },

];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();

import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const databases = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  if (!searchTerm || !movie) return;

  try {
    // Check if the search term already exists
    const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", searchTerm), // Make sure "searchTerm" exists in Appwrite
    ]);

    if (result.documents.length > 0) {
      // Document exists — update the search count
      const existingDoc = result.documents[0];
      const updatedDoc = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingDoc.$id,
        {
          searchCount: existingDoc.searchCount + 1,
          lastSearchedMovie: movie.title,
        }
      );

      console.log("Search count updated:", updatedDoc);
    } else {
      const newDoc = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500", // Fallback to a placeholder image if no poster is available
        }
      );

      console.log("New search count document created:", newDoc);
    }
  } catch (error) {
    console.error(`Error updating search count: ${error}`);
  }
};

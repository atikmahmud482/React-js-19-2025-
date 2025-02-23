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
      // Use the first document from the result
      const existingDoc = result.documents[0];

      const updatedDoc = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingDoc.$id, // Reference the correct document ID
        {
          searchCount: (existingDoc.searchCount || 0) + 1, // Ensure it's an integer
          lastSearchedMovie: movie.title,
        }
      );

      console.log("Search count updated:", updatedDoc);
    } else {
      // Use "searchCount" instead of "count"
      const newDoc = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          searchTerm,
          searchCount: 1, // Set "searchCount" to 1 for new records
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }
      );

      console.log("New search count document created:", newDoc);
    }
  } catch (error) {
    console.error(`Error updating search count: ${error}`);
  }
};

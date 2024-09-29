// src/services/imageService.ts
import axios from "axios";

// Function to get a Google Drive image URL by file ID
export function getImageUrl(fileId: string): string {
  return `https://lh3.googleusercontent.com/d/${fileId}`;
}

// Function to get folder name by ID from the API
export async function getFolderName(folderId: string): Promise<string> {
  try {
    const folderNameResponse = await axios.get("http://localhost:3001/api/folderName", {
      params: { folderId },
      headers: { "Access-Control-Allow-Origin": true },
    });
    return folderNameResponse.data.folderName;
  } catch (error) {
    console.error("Error fetching folder name: ", error);
    throw new Error("Failed to load folder name.");
  }
}

// Function to get folder items by folder ID
export async function getFolderItems(folderId: string): Promise<Array<any>> {
  try {
    const filesResponse = await axios.get("http://localhost:3001/api/files", {
      params: { folderId },
      headers: { "Access-Control-Allow-Origin": true },
    });
    return filesResponse.data.files;
  } catch (error) {
    console.error("Error fetching folder items: ", error);
    throw new Error("Failed to load folder items.");
  }
}
import axios from 'axios';

export const fetchDriveFiles = async (folderId) => {
  try {
    const apiKey = process.env.GOOGLE_API_KEY
    const response = await axios.get(`https://www.googleapis.com/drive/v3/files`, {
      params: {
        q: `'${folderId}' in parents and mimeType contains 'image/'`,
        fields: 'files(id, name)',
        key: 'AIzaSyD11i5nVnNqdnfrn7uzTBLGq8-UMB4FQIw', // Replace with your API key
      },
    headers: {
    'Content-Type': 'application/json',
  },
    });
    return response.data.files;
  } catch (error) {
    console.error('Error fetching files:', error);
    return [];
  }
};

export const getImage = async ( fileId ) => {
  try {
    const image = axios.get( `https://drive.google.com/uc?export=view&id=${ fileId }&authuser=0`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': [
          'http://localhost:3000',
          'http://127.0.0.1:3000',
          'https://192.168.10.87:3000'
        ]
      }
    }  
    )
    return image.data
  } catch ( error ) {
    console.error( "Error fetching file", error )
    throw error;
  }
  
  
} 
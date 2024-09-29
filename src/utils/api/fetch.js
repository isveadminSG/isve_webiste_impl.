
export async function fetchGuideLines() {
  try {
    const response = await fetch('~/public/guideLines.json'); // Adjust the path if necessary
    if (!response.ok) {
      throw new Error('Failed to fetch guideLines');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching guideLines:', error);
    throw error; // Re-throw to handle it in the component
  }
}



export async function fetchTeamMembers() {
  try {
    const response = await fetch('~/public/teamMembers.json'); // Adjust the path if necessary
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    const responseText = await response.text();
    console.log( "Raw API response:", responseText )
    
    const data = JSON.parse( responseText );

    return data;
  } catch (error) {
    console.error('Error fetching teamMembers:', error);
    throw error; // Re-throw to handle it in the component
  }
}





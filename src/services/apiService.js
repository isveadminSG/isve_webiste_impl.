import { fetchGuideLines, fetchTeamMembers } from '~/utils/api/fetch';

export const getGuideLines = async () => {
  try {
    const guideLines = await fetchGuideLines();
    return guideLines;
  } catch (error) {
    console.error("Error fetching guide lines:", error);
    throw error;
  }
};

export const getTeamMembers = async () => {
  try {
    const teamMembers = await fetchTeamMembers();
    return teamMembers;
  } catch (error) {
    console.error("Error fetching team members:", error);
    throw error;
  }
};

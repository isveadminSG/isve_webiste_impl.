// teamController.js

import { ref, onMounted } from 'vue';
import teamMembersData from '../../assets/data/teamMembers.json' // Import your JSON data

export default function useTeamController() {

    const memberList = ref([]);
    const currentMember = ref(null);

    // Function to update the current member
    const updateCurrentMember = (newMember) => {
      currentMember.value = newMember;
      console.log("Member list: ", memberList.value)
    };

    // Function to add a member to the list
    const addMemberToList = (mem) => {
      try {
        memberList.value.push(mem); // Add directly from the JSON file data
      } catch (err) {
        console.error("Error while adding the current member", err);
      }
    };

    // Load the team members from JSON
    const loadTeamMembers = () => {
      teamMembersData.forEach((member) => {
        addMemberToList( member );
        
      });
    };

    onMounted(loadTeamMembers);

    return {
      memberList,
      currentMember,
      updateCurrentMember,
    };
};

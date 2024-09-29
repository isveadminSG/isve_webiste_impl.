import { ref, onMounted } from 'vue';
import guideLineData from '../../assets/data/guideLines.json'
import { GuideLine } from '../../store/GuideLine'


export default function useGuideLineController() {
  const valuesList = ref<GuideLine[]>([]);

  // Function to load values from a JSON file
  const loadValues = async () => {
    try {
      valuesList.value = guideLineData as GuideLine[]
    } catch (error) {
      console.error("Error fetching values:", error);
    }
  };

  // Load values on component mount
  onMounted(loadValues);

  return {
    valuesList,
  };
}

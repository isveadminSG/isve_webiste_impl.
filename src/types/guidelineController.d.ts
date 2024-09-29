

declare module  'guideLineController'{

    import {Ref} from 'vue';
    
    interface GuideLine {
        id: number;
        title: string;
        info: string; // Add other properties as needed
    }
    
    
    export default function useGuideLineController(): {
        valuesList: Ref<GuideLine[]>
    }
}

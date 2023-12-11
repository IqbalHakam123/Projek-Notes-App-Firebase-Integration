import { Pressable, Text } from "@gluestack-ui/themed";
import React from "react";

const CategoryTab = ({padding, title, onPress, fontSize, margin}) => {
    return (
        <Pressable 
            onPress={onPress} 
            padding={padding} 
            margin={margin} 
            backgroundColor="$blue700" 
            borderRadius={"$lg"}
        >
            <Text
                color="$white"
                textAlign="center"
                fontSize={fontSize ? fontSize : "$lg"}
            >
                {title}
            </Text>
        </Pressable>
    );
};

export default CategoryTab;
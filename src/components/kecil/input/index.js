import { FormControlLabel, Textarea, VStack, Text, TextareaInput, InputField } from "@gluestack-ui/themed";
import { Input as GlueInput } from "@gluestack-ui/themed";
import React from "react";

const Input = ({ dropdown, textarea, width, height, fontSize, label, value, secureTextEntry, keyBoardType, onChangeText, disabled }) => {
    if (textarea) {
        return(
            <VStack>
                <FormControlLabel marginTop={"$5"} flexDirection="column" alignItems="left">
                    <Text fontSize={fontSize ? fontSize : "$lg"} mb={"$2"} fontWeight="$bold">
                        {label}
                    </Text>
                </FormControlLabel>
                <Textarea width={width} height={height} borderWidth={"$1"} borderRadius={"$sm"} borderColor="$warmGray500">
                    <TextareaInput
                        role="form"
                        fontSize={fontSize ? fontSize : "$lg"}
                        height={"$96"}
                        textAlignVertical="top"
                        multiline={true}
                        numberOfLines={4}
                        value={value}
                        onChangeText={onChangeText}
                        editable={disabled ? false : true}
                    />
                </Textarea>
            </VStack>
        );
    }
    return (
        <>
            <FormControlLabel marginTop={"$5"} flexDirection="column" alignItems="left">
                <Text fontSize={fontSize ? fontSize : "$md"} fontWeight="bold" mb={"$2"}>
                    {label}
                </Text>
                <GlueInput width={width} height={height} borderWidth={"$1"} borderRadius={"$sm"} borderColor={"$warmGray500"}>
                    <InputField secureTextEntry={secureTextEntry} value={value} keyboardType={keyBoardType} onChangeText={onChangeText} editable={disabled ? false : true}/>
                </GlueInput>
            </FormControlLabel>
        </>
    );
};

export default Input;
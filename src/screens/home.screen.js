/* eslint-disable no-undef */
import React from "react";
import { Search } from "react-ionicons";
import { VStack, Text, Input, Box } from "native-base";
import { ChatList } from "../components/chat-list.component";

import { ChatCreate } from "../components/chat-create.component";

export const HomeScreen = () => {
  const [search, setSearch] = React.useState("");

  return (
    <VStack space={"sm"} p={5}>
      <VStack>
        <Text textAlign={"center"}>Zima</Text>
        <Text textAlign={"center"} fontSize="2xs" color="gray.600">
          ChatGPT Assistant
        </Text>
      </VStack>
      <Input
        // logic
        value={search}
        onChangeText={setSearch}
        //styling
        px={2}
        py={3}
        shadow={1}
        minWidth={200}
        borderWidth={1}
        borderRadius="md"
        numberOfLines={4}
        variant="unstyled"
        placeholder="Search your saved chats ...."
        _hover={{
          shadow: 5,
        }}
        _focus={{
          shadow: 3,
          placeholderTextColor: "gray.400",
        }}
        InputLeftElement={
          <Box ml={3}>
            <Search height={"10px"} width={"10px"} />
          </Box>
        }
      />
      <ChatCreate />
      <ChatList search={search} />
    </VStack>
  );
};
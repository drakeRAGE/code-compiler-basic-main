import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={2} algin>  {/* for space between the select the language and the ouput window */}
        <Box w="150%" h="90%">
        <LanguageSelector language={language} onSelect={onSelect}/>
        <Editor
          options={{
            minimap: {
              enabled: true,
            },
          }}
          height="81vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
        </Box>
        <Output w='100%' editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;

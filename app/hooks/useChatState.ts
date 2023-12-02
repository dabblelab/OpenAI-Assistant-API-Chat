// useChatState.ts
import { useState, useRef } from 'react';
import ChatManager from '../services/ChatManager';


type FileDetail = {
  name: string;
  type: string;
  size: number;
};

export const useChatState = () => {
  
  
  const [assistantName, setAssistantName] = useState('');
  const [assistantModel, setAssistantModel] = useState('gpt-3.5-turbo-1106');
  const [assistantDescription, setAssistantDescription] = useState('');
  const [inputmessage, setInputmessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{ role: string; content: any; }[]>([]);
  const [chatStarted, setChatStarted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isStartLoading, setStartLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [initialThreadMessage, setInitialThreadMessage] = useState('Your name is Archr. You are an AI assistant created by Dabble Lab. You always open a conversation with "Hey there, I\'m Archr! I can help you turn great ideas in great software." You help people turn software ideas into detailed technical requirements that can be used to estimate the costs and timeline required to make your idea reality. You are friendly but direct. You respond in a way that does not require a technical background to understand. Introduce yourself and ask the user to tell you about their project idea.');
  const [statusMessage, setStatusMessage] = useState('');
  const counter = useRef(0);
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const [chatManager, setChatManager] = useState<ChatManager | null>(null);
  const [assistantId, setAssistantId] = useState<string | null>(process.env.REACT_APP_ASSISTANT_ID || '');
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoadingFirstMessage, setIsLoadingFirstMessage] = useState(false);
  const [chatUploadedFiles, setChatUploadedFiles] = useState<File[]>([]);
  const [chatFileDetails, setChatFileDetails] = useState<FileDetail[]>([]);


  return {
    assistantName, setAssistantName,
    assistantModel, setAssistantModel,
    assistantDescription, setAssistantDescription,
    inputmessage, setInputmessage,
    chatMessages, setChatMessages,
    chatStarted, setChatStarted,
    isButtonDisabled, setIsButtonDisabled,
    files, setFiles,
    assistantId, setAssistantId,
    threadId, setThreadId,
    isStartLoading, setStartLoading,
    isSending, setIsSending,
    statusMessage, setStatusMessage,
    counter,
    inputRef,
    formRef,
    initialThreadMessage, 
    setInitialThreadMessage,
    chatManager, setChatManager,
    isMessageLoading, setIsMessageLoading,
    progress, setProgress,
    isLoadingFirstMessage, setIsLoadingFirstMessage,
    chatUploadedFiles, setChatUploadedFiles,
    chatFileDetails, setChatFileDetails,
    

  };
};
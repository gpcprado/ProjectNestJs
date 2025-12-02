// src/messages/message.interface.ts (or message.dto.ts)

export interface Message {
  // Corresponds to message_id INT AUTO_INCREMENT PRIMARY KEY
  message_id?: number; 

  // Corresponds to message_code VARCHAR(1000) NOT NULL
  message_code: string; 

  // Corresponds to message_content VARCHAR(10000) NOT NULL
  message_content: string; 

  // Corresponds to id INT NOT NULL (Foreign Key)
  id: number; 

  // Corresponds to sentTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  sentTime?: Date | string;
}
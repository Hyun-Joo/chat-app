package com.cos.chatapp.vo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@Document(collection = "chat")
public class Chat {

    @Id
    private String id;
    private String msg;
    private String sender;
    private String receiver;

    private LocalDateTime createdAt;

}

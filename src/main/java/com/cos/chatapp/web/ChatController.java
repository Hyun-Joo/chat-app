package com.cos.chatapp.web;

import com.cos.chatapp.repository.ChatRepository;
import com.cos.chatapp.vo.Chat;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
public class ChatController {

    private final ChatRepository chatRepository;

    @GetMapping(value = "/sender/{sender}/receiver/{receiver}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Chat> getMsg(@PathVariable String sender, @PathVariable String receiver) {
        // Flux: 데이터 여러 건 리턴
        return chatRepository.mFindBySender(sender, receiver)
                .subscribeOn(Schedulers.boundedElastic());
    }

    @PostMapping("/chat")
    public Mono<Chat> setMsg(@RequestBody Chat chat) {  // Mono: 데이터 한 건 리턴
        chat.setCreatedAt(LocalDateTime.now());
        return chatRepository.save(chat);
    }

}

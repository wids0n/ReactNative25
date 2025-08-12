import React, { useEffect, useState } from "react";
import { View } from "react-native";
import socket from "@/socket/socket";

export default function socket() {
    const roomprefix = 'chat';

    //form1
    const [message, setmessage] = useState('');
    const [receivedmessage, setReceividmessage] = useState('');

    //form2
    const [message2, setmessage2] = useState('');
    const [receivedmessage2, setReceividmessage2] = useState('');

    useEffect(() => {
        socket.emit('join_room', 'chat-1');
        socket.emit('join_room', 'chat-2');
        socket.on('receive_message', (response: {
            room: String, msg: String
        }) => {
            console.log(response);
            if (response.room === 'chat-1') {
                setReceivedmessage(response.msg);
            } else if (response.room === 'chat-2') {
                setReceivedmessage2(response.msg);
            }
        }

        return () => { socket.off('received_message'); };
    }, []);

    const sendmessage = (chat: string) => {
        const targetRoom = `${roomPrefix}-${chat}`;
        const msg = chat === '1' ? message : mesage2;

        socket.emit('send_menssge', {
            room: targetRoom, message: msg
        })
        if (chat === '1') {
            setMessage('');
        } else {
            setMessage2('');
        }
    }
    return (
        <View> </View>
    );
}
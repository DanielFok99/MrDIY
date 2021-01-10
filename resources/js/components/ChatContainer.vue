<template>
    <div class="window-container">
        <div class="chat-forms">
            <form v-if="addNewRoom" @submit.prevent="createRoom">
                <input
                    v-model="addRoomUsername"
                    placeholder="Add username to create a room"
                    type="text"
                />
                <button :disabled="disableForm || !addRoomUsername" type="submit">
                    Create Room
                </button>
                <button class="button-cancel" @click="addNewRoom = false">
                    Cancel
                </button>
            </form>

            <form v-if="inviteRoomId" @submit.prevent="addRoomUser">
                <input
                    v-model="invitedUsername"
                    placeholder="Add user to the room"
                    type="text"
                />
                <button :disabled="disableForm || !invitedUsername" type="submit">
                    Add User
                </button>
                <button class="button-cancel" @click="inviteRoomId = null">
                    Cancel
                </button>
            </form>

            <form v-if="removeRoomId" @submit.prevent="deleteRoomUser">
                <select v-model="removeUserId">
                    <option default value="">Select User</option>
                    <option v-for="user in removeUsers" :key="user._id" :value="user._id">
                        {{ user.username }}
                    </option>
                </select>
                <button :disabled="disableForm || !removeUserId" type="submit">
                    Remove User
                </button>
                <button class="button-cancel" @click="removeRoomId = null">
                    Cancel
                </button>
            </form>
        </div>

        <chat-window
            :currentUserId="currentUserId"
            :loadingRooms="loadingRooms"
            :menuActions="menuActions"
            :messages="messages"
            :messagesLoaded="messagesLoaded"
            :roomMessage="roomMessage"
            :rooms="loadingRooms ? [] : rooms"
            :showAddRoom="showAddRoom"
            :showAudio="showAudio"
            :styles="styles"
            :theme="theme"
            height="calc(100vh - 270px)"
            @addRoom="addRoom"
            @deleteMessage="deleteMessage"
            @editMessage="editMessage"
            @fetchMessages="fetchMessages"
            @menuActionHandler="menuActionHandler"
            @messageActionHandler="messageActionHandler"
            @openFile="openFile"
            @sendMessage="sendMessage"
            @sendMessageReaction="sendMessageReaction"
            @typingMessage="typingMessage"
        >
        </chat-window>
    </div>
</template>

<script>
// import {
// 	firebase,
// 	roomsRef,
// 	messagesRef,
// 	usersRef,
// 	filesRef,
// 	deleteDbField
// } from '@/firestore'
// import { parseTimestamp, isSameDay } from '@/utils/dates'
import ChatWindow from 'vue-advanced-chat'
// import 'vue-advanced-chat/dist/vue-advanced-chat.css'

export default {
    components: {
        ChatWindow
    },

    props: ['currentUserId', 'theme', 'staffId', 'baseUrl'],

    data() {
        return {
            perPage: 20,
            rooms: [],
            allUsers: [],
            loadingRooms: true,
            loadingLastMessageByRoom: 0,
            selectedRoom: null,
            messages: [],
            messagesLoaded: false,
            roomMessage: '',
            start: null,
            end: null,
            roomsListeners: [],
            listeners: [],
            typingMessageCache: '',
            disableForm: false,
            addNewRoom: false,
            addRoomUsername: '',
            inviteRoomId: null,
            invitedUsername: '',
            removeRoomId: null,
            removeUserId: '',
            removeUsers: [],
            styles: {container: {borderRadius: '4px'}},
            showAddRoom: false,
            showAudio: false,
            menuActions: [
                {
                    name: 'completeChat',
                    title: 'Complete'
                }
            ],
            // ,dbRequestCount: 0
        }
    },

    mounted() {
        this.fetchRooms()
        // this.updateUserOnlineStatus()
    },

    destroyed() {
        this.resetRooms()
    },

    methods: {
        resetRooms() {
            // this.loadingRooms = true
            // this.loadingLastMessageByRoom = 0
            // this.rooms = []
            // this.roomsListeners.forEach(listener => listener())
            // this.resetMessages()
        },

        resetMessages() {
            this.messages = []
            this.messagesLoaded = false
            this.start = null
            this.end = null
            this.listeners.forEach(listener => listener())
            this.listeners = []
        },

        async fetchRooms() {
            this.resetRooms()

            let data = new FormData();
            data.append('staffId', this.staffId);
            axios.post(this.baseUrl + '/chat/staff/room', data)
                .then(res => {
                    this.rooms = res.data;
                })
            this.loadingRooms = false

        },

        listenLastMessage(room, index) {

        },

        formatLastMessage(message) {

        },

        fetchMessages({room, options = {}}) {
            let data = new FormData();
            data.append('roomId', room.roomId);
            axios.post(this.baseUrl + '/chat/staff/message', data)
                .then(res => {
                    this.messages = res.data;
                })

            this.messagesLoaded = true;
        },

        listenMessages(messages, room) {
            console.log(messages)
            console.log(room)
        },

        markMessagesSeen(room, message) {
        },

        formatMessage(room, message) {

        },

        async sendMessage({content, roomId, file, replyMessage}) {
            let data = new FormData();
            data.append('roomId', roomId);
            data.append('messageContent', content);
            axios.post(this.baseUrl + '/chat/staff/insert', data)
                .then(res => {
                    this.messages = res.data;
                })

            console.log(content + ' ' + roomId);
        },

        openFile({message, action}) {
        },

        async editMessage({messageId, newContent, roomId, file}) {

        },

        async deleteMessage({messageId, roomId}) {

        },

        async uploadFile({file, messageId, roomId}) {

        },

        menuActionHandler({action, roomId}) {

        },

        messageActionHandler() {

        },

        textareaActionHandler({message, roomId}) {

        },

        async sendMessageReaction({reaction, remove, messageId, roomId}) {

        },

        typingMessage({message, roomId}) {

        },

        async listenRoomsTypingUsers(query) {

        },

        updateUserOnlineStatus() {

        },

        listenUsersOnlineStatus() {

        },

        addRoom() {

        },

        async createRoom() {

        },

        inviteUser(roomId) {

        },

        async addRoomUser() {

        },

        removeUser(roomId) {

        },

        async deleteRoomUser() {

        },

        async deleteRoom(roomId) {

        },

        resetForms() {
            this.disableForm = false
            this.addNewRoom = null
            this.addRoomUsername = ''
            this.inviteRoomId = null
            this.invitedUsername = ''
            this.removeRoomId = null
            this.removeUserId = ''
        }

        // ,incrementDbCounter(type, size) {
        // 	size = size || 1
        // 	this.dbRequestCount += size
        // 	console.log(type, size)
        // }
    }
}
</script>

<style lang="scss" scoped>
//.window-container {
//	width: 100%;
//}
//
//.chat-forms {
//	padding-bottom: 20px;
//
//	form {
//		padding-top: 20px;
//	}
//
//	input {
//		padding: 5px;
//		width: 180px;
//		height: 21px;
//		border-radius: 4px;
//		border: 1px solid #d2d6da;
//		outline: none;
//		font-size: 14px;
//		vertical-align: middle;
//
//		&::placeholder {
//			color: #9ca6af;
//		}
//	}
//
//	button {
//		background: #1976d2;
//		color: #fff;
//		outline: none;
//		cursor: pointer;
//		border-radius: 4px;
//		padding: 8px 12px;
//		margin-left: 10px;
//		border: none;
//		font-size: 14px;
//		transition: 0.3s;
//		vertical-align: middle;
//
//		&:hover {
//			opacity: 0.8;
//		}
//
//		&:active {
//			opacity: 0.6;
//		}
//
//		&:disabled {
//			cursor: initial;
//			background: #c6c9cc;
//			opacity: 0.6;
//		}
//	}
//
//	.button-cancel {
//		color: #a8aeb3;
//		background: none;
//		margin-left: 5px;
//	}
//
//	select {
//		vertical-align: middle;
//		height: 33px;
//		width: 120px;
//		font-size: 13px;
//	}
//}
</style>

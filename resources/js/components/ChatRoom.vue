<template>
    <chat-window :currentUserId="currentUserId" :messages="messages" :rooms="rooms" :showAddRoom="showAddRoom"
                 @fetchMessages="fetchMessages"/>
</template>


<script>
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

export default {
    components: {
        ChatWindow
    },
    props: {
        currentUserId: Number,
        rooms: Array,
        messages: Array,
    },
    data() {
        return {
            showAddRoom: false,
            // rooms: [],
            // messages: [],
            // currentUserId: ''
        }
    }, methods: {
        fetchMessages({room, options = {}}) {
            console.log('test');
            // if (options.reset) this.resetMessages()
            //
            // if (this.end && !this.start) return (this.messagesLoaded = true)
            //
            // let ref = messagesRef(room.roomId)
            //
            // let query = ref.orderBy('timestamp', 'desc').limit(this.perPage)
            //
            // if (this.start) query = query.startAfter(this.start)
            //
            // this.selectedRoom = room.roomId
            //
            // query.get().then(messages => {
            //     // this.incrementDbCounter('Fetch Room Messages', messages.size)
            //     if (this.selectedRoom !== room.roomId) return
            //
            //     if (messages.empty) this.messagesLoaded = true
            //
            //     if (this.start) this.end = this.start
            //     this.start = messages.docs[messages.docs.length - 1]
            //
            //     let listenerQuery = ref.orderBy('timestamp')
            //
            //     if (this.start) listenerQuery = listenerQuery.startAfter(this.start)
            //     if (this.end) listenerQuery = listenerQuery.endAt(this.end)
            //
            //     if (options.reset) this.messages = []
            //
            //     messages.forEach(message => {
            //         const formattedMessage = this.formatMessage(room, message)
            //         this.messages.unshift(formattedMessage)
            //     })
            //
            //     const listener = listenerQuery.onSnapshot(snapshots => {
            //         // this.incrementDbCounter('Listen Room Messages', snapshots.size)
            //         this.listenMessages(snapshots, room)
            //     })
            //     this.listeners.push(listener)
            // })
        },
    }
}
</script>

<style scoped>

</style>

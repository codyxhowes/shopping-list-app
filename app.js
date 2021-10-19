Vue.createApp({
            data(){
                return {
                    header: "Shopping List",
                    editing: false,
                    newItem: '',
                    newItemPriority:'false',
                    items: []
                }
            },

            computed:{

                reversedItems(){
                    return [...this.items].reverse()
                },
            },

            methods:{

                saveItem(){
                    this.items.push({
                        id:this.items.length + 1, 
                        label: this.newItem, 
                        highPriority: this.newItemHighPriority
                    })

                    this.newItem = ""
                    this.newItemHighPriority = false
                },

                doEdit(editing){
                    this.editing = editing
                    this.newItem = ""
                    this.newItemHighPriority = false
                },

                togglePurchased(item){
                    item.purchased = !item.purchased
                }
            }
        })
        .mount('#shopping-list')
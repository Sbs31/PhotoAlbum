<template>
    <div class="card"  id="photo-table"  @contextmenu.prevent="ContextMenu"  @click="HideContextMenu">
        <modal-add-albom  v-if="showModal" @close-modal="modal" @new-albom="fetch_albom"
                          :userid="userid"

                          :albomid="albom_id"
                          :isPhoto="true"
        ></modal-add-albom>
        <div class="card-header">Фотоальбом, {{albom_id}} </div>
    <div class="mb-5  custom-modal ">

        <div class="row"  >
            <div  class="col-lg-4 col-md-12 mb-lg-0 albom__item"    v-for="photo in photos">
                <img
                    :data-ctx="photo.id"
                    :src="photo.photo_url"
                    class="w-100 shadow-1-strong rounded"
                    alt=""
                />

            </div>

        </div>

        <transition name='fade'>
            <div v-show="showMenu"
                 :style="{top: contextTop + 'px', left: contextLeft + 'px'}"


                 class="custom-context-menu isHideContext" id="context-menu">
                <div class="menu__item" @click="modal" >Добавить фото</div>

                <!--<a class="menu__item" href="#">Something else here</a>-->
            </div>
        </transition>
        <transition name='fade'>
            <div v-show="showMenuAlboms"
                 :style="{top: contextTop + 'px', left: contextLeft + 'px'}"


                 class="custom-context-menu isHideContext" id="context-menu-albom">
                <div class="menu__item" @click="removeAlbom(albomContextId)">удалить</div>

                <!--<a class="menu__item" href="#">Something else here</a>-->
            </div>
        </transition>

    </div>
    </div>

</template>

<script>
    export default {
        name: "PhotoAlbum",
        props: ['albom_id','userid'],
        data:()=>({
            photos: [],
            showMenu: false,
            showMenuAlboms: false,
            contextTop: 0,
            contextLeft: 0,
            albomContextId: '',
            showModal: false,

        }),

        mounted() {
          this.fetch_albom()
        },
        methods: {
            fetch_albom() {
                this.showModal = false
                axios.get(`/api/getPhoto/${this.albom_id}`).then((res) => this.photos = res.data);
            },
            modal(){

                this.showModal = !this.showModal;
            },
            async removeAlbom(albomId){
              await  axios.delete(`/api/photo/${albomId}`)
                    .then(res=> console.log(res));
                this.showMenuAlboms = false;
                this.fetch_albom()


            },
            editAlbom(){
                this.showModal = true;
                this.modalEdite = true;
            },
            ContextMenu(e){
                let t = e.target;
                console.log(e.target);

                if(t.id === 'photo-table' ) {
                    this.modalEdite = false;
                    this.showMenuAlboms = false;

                    this.contextTop = e.offsetY
                    this.contextLeft= e.offsetX

                    /*$('#context-menu').css({

                        top: top,
                        left: left
                    });*/
                    this.showMenu = true;
                }else{


                    this.showMenu = false;
                    this.contextTop  = e.pageY - 70;
                    this.contextLeft = e.pageX - 390;
                    this.showMenuAlboms = true;

                    let td = e.target.closest('.albom__item');
                    if(td){
                        let data = e.target.dataset.ctx;
                        this.albomContextId = data;
                        console.log('клик по итему ' ,data);
                    }else {
                        console.log('клик по столу')
                    }

                }
            },
            HideContextMenu(){
                if(this.showMenu || this.showMenuAlboms)
                    setTimeout(()=>{
                        this.showMenuAlboms = false;
                        this.showMenu = false
                    },100);
                /*setTimeout(()=>this.showMenu = false,1000);*/
                //this.menuClass = '';


            },
            ContextAlbom(e){
                this.contextTop = e.pageYOffset + 70;
                this.contextLeft= e.pageXOffset + 20;
                this.showMenuAlboms = true;
            },
        }
    }
</script>

<style scoped>
    .custom-context-menu{
        position: absolute;
        background-color: #fff;
        display: flex;
        flex-direction:column;

        padding: 0px;
        width: 20rem;
        border-radius: 4px;
        box-shadow: 0 10px 20px -5px rgba(0,0,0,.4);

    }
    .menu__item{
        padding: 10px;

        background-color: #fff;
        color: #000;
        font-size: 18px;
        cursor: pointer;
    }
    .menu__item:hover{
        background-color: #555;
        color: #fff;
    }

    .fade-enter-active, .fade-leave-active {
        transition: .2s;

    }
    .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateY(20px);
    }
</style>

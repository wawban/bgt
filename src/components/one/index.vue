<template>
    <div class="dgone">
        <div class="top">
            <img src="./img/t1.png" alt="">
        </div>
        <div class="met">
            <div class="left">
                <div>
                    <div class="ltl">
                        <div>
                            <div>
                                <img src="./img/lj.png" alt="">
                                <div class="switch" @click="onsitch(1)">
                                    <div :class="ofswitch ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="center">
                                <img src="./img/fw.png" alt="">
                                <div class="switch" @click="onsitch">
                                    <div :class="ofswitchs ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="sx">
                                <img src="./img/sx.png" alt="">
                            </div>
                        </div>
                        <img v-if="ofswitch" src="./img/t21.png" alt="">
                    </div>
                    <div class="ltr">
                        <div>
                            <div>
                                <img src="./img/lj.png" alt="">
                                <div class="switch" @click="onsitch1(1)">
                                    <div :class="ofswitch1 ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="center">
                                <img src="./img/fw.png" alt="">
                                <div class="switch" @click="onsitch1">
                                    <div :class="ofswitchs1 ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="sx">
                                <img src="./img/sx.png" alt="">
                            </div>
                        </div>
                        <img v-if="ofswitch1" src="./img/t31.png" alt="">
                    </div>
                </div>
                <div class="bottom">
                    <div class="lbl">
                        <div>
                            <div>
                                <img src="./img/lj.png" alt="">
                                <div class="switch" @click="onsitch2(1)">
                                    <div :class="ofswitch2 ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="center">
                                <img src="./img/fw.png" alt="">
                                <div class="switch" @click="onsitch2">
                                    <div :class="ofswitchs2 ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="sx">
                                <img src="./img/sx.png" alt="">
                            </div>
                        </div>
                        <img v-if="ofswitch2" src="./img/t41.png" alt="">
                    </div>
                    <div class="lbr">
                        <div>
                            <div>
                                <img src="./img/lj.png" alt="">
                                <div class="switch" @click="onsitch3(1)">
                                    <div :class="ofswitch3 ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="center">
                                <img src="./img/fw.png" alt="">
                                <div class="switch" @click="onsitch3">
                                    <div :class="ofswitchs3 ? 'radius radiusl' : 'radius radiusr'"></div>
                                </div> 
                            </div>
                            <div class="sx">
                                <img src="./img/sx.png" alt="">
                            </div>
                        </div>
                        <img v-if="ofswitch3" src="./img/t51.png" alt="">
                    </div>
                </div>
            </div>
            <div class="rigth">
                <div class="top">
                    <img src="./img/bt.png" alt="">
                </div>
                <div class="list">
                    <img src="./img/lb.png" alt="">
                </div>
                <div class="footer">
                    <div>
                        <img src="./img/nl.png" alt="">
                    </div>
                    <div class="lin"></div>
                    <div>
                        <img src="./img/yw.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            ofswitch:true,
            ofswitchs:true,
            ofswitch1:true,
            ofswitchs1:true,
            ofswitch2:true,
            ofswitchs2:true,
            ofswitch3:true,
            ofswitchs3:true,
        }
    },
    methods: {
        onsitch(i){
            if(i==1){
                this.ofswitch = !this.ofswitch
                return
            }
            this.ofswitchs = !this.ofswitchs
            
        },
        onsitch1(i){
            if(i==1){
                this.ofswitch1 = !this.ofswitch1
                return
            }
            this.ofswitchs1 = !this.ofswitchs1
            
        },
        onsitch2(i){
            if(i==1){
                this.ofswitch2 = !this.ofswitch2
                return
            }
            this.ofswitchs2 = !this.ofswitchs2
            
        },
        onsitch3(i){
            if(i==1){
                this.ofswitch3 = !this.ofswitch3
                return
            }
            this.ofswitchs3 = !this.ofswitchs3
            
        },
    }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
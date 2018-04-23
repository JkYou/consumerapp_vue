<template>
    <section class="tabbar">
        <router-link :to="{ name: 'index' }" class="tab-item" exact>
            <div class="tab-item-icon">
              <i class="icon iconfont icon-huo"></i>
            </div>
            <p class="tab-item-label">精选</p>
        </router-link>
        <router-link :to="{ name: 'juhuasuan' }" class="tab-item" exact>
            <div class="tab-item-icon">
              <i class="icon iconfont icon-301"></i>
            </div>
            <p class="tab-item-label">淘抢购</p>
        </router-link>
      <router-link :to="{ name: 'guide' }" class="tab-item" exact>
          <div class="tab-item-icon">
            <i class="icon iconfont icon-neirong2"></i>
          </div>
          <p class="tab-item-label">攻略</p>
      </router-link>
    </section>
</template>

<script>
export default {
    name: 'tabbar',
    data() {
        return {
            counter:0
        };
    },
    created() {
            //在组件B创建的钩子中监听事件
            this.$on('change', count => {
                debugger
                this.counter += count
            })
            console.log(this.counter);
        }
}
</script>

<style scoped lang="less">
.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    height: 50px;
    width: 10rem;
    margin: 0 auto;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;
    .tab-item {
        display: block;
        flex: 1;
        padding: 5px 0;
        &.router-link-exact-active {
            color: #cc0244;
        }
    }
    .tab-item-icon {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        .icon {
            width: 30px;
            height: 30px;
          font: 20px/30px 'Avenir';
          text-align: center;
          padding-left: 5px;
        }
    }
    .tab-item-label {
        text-align: center;
        font-size: 12px;
    }
}
</style>

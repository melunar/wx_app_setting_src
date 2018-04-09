<template>
    <!-- 用于图片轮播和图片橱窗 等元组件使用 -->
    <div class="meta-base-image-display">
        <div class="image-container">
            <img v-for="(item, index) in ImageList" :key="index"
                class="image-normal" :class="{'hide': type===1 && index > 0}"
                :src="item.src || defaultImageUrl(index)">
        </div>
        <div v-if="type===1" class="images-carousel-btns"
            :class="{
                'carousel-btn-left': btnPosition === 1,
                'carousel-btn-center': btnPosition === 2,
                'carousel-btn-right': btnPosition === 3
            }">
            <span v-for="i in ImageList.length" :key="i" class="carousel-btn"
                :class="{
                    'carousel-btn-shape-circle': btnPosition === 1,
                    'carousel-btn-shape-rect2': btnPosition === 2,
                    'carousel-btn-shape-rect': btnPosition === 3
                }"
                :style="{
                    'background-color': btnColor,
                    'margin-left': btnMarginLR + 'px',
                    'margin-right': btnMarginLR + 'px',
                    'margin-bottom': btnMarginBottom + 'px',
                    'opacity': btnTransparency
                }"
            ></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "metaBaseImageDisplay",
    mixins:[],
    props: {
        // 类型 1:轮播图
        type: { type: Number, default: 1 },

        //图集
        imageList: { type: Array, default: function() {
            return [
                { src: "", linkUrl: "" },
                { src: "", linkUrl: "" }
            ];
        } },

        //1:轮播图生效的属性
        // 按钮形状 1：长方形， 2：正方形，3：圆形
        btnShape: { type: Number, default: 1 },
        // 按钮位置 1：左边， 2：中间，3：右侧
        btnPosition: { type: Number, default: 1 },
        // 按钮颜色  
        btnColor: { type: String, default: "#FFF" },
        //按钮左右边距px
        btnMarginLR: { type: Number, default: 5 },
        //按钮左右边距px
        btnMarginBottom: { type: Number, default: 5 },
        //按钮透明度（0-1.0）
        btnTransparency : { type: Number, default: 0.8 },
    },
    data: function() {
        return {
            ImageList: this.imageList
        };
    },
    components: {
        /*requireDemo: function (resolve) {
            require([""], resolve);
        }*/
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {},
    methods: {
        // 设置默认图标占位符背景图片
        defaultImageUrl: function(index) {
            var rest = index % 2;
            return "/static/images/static_img/img-bg-" + rest + ".jpg"
        }
    }
}
</script>

<style scoped lang="less">
    //@import "../less/variables.less";
    //@import "../less/sprite.less";
    .meta-base-image-display {
        position: relative;
        width: 100%; height: 100%;
        .image-normal {
            display: inline-block;
            border: none;
            width: 341px;
            height: 192px;
        }

        .images-carousel-btns {
            position: absolute; bottom: 0px;
            display: inline-block; overflow: hidden; max-width: 100%;
        }
        .carousel-btn-left { float: left; }
        .carousel-btn-center { text-align: center; width: 100%; }
        .carousel-btn-right { float: right; }

        .carousel-btn { width: 10px; height: 10px; display: inline-block; }
        .carousel-btn-shape-circle { border-radius: 10px; }
        .carousel-btn-shape-rect2 { border-radius: 0px; }
        .carousel-btn-shape-rect { border-radius: 0px; width: 15px; }
        .hide { display: none; }
    }
</style>
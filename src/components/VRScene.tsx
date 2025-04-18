import { Five, FiveInitArgs, WorkState } from '@realsee/five'
import {
  ModelViewPlugin,
  PanoCompassPlugin,
  PanoRulerPlugin,
  TopviewPlugin,
  VreoProvider,
  VreoUnit
} from '@realsee/vapor'
import React, { useEffect, useRef, useState } from 'react'
import './VRScene.scss'

// 使用如视提供的示例数据
const DEMO_DATA = {
  work: {
    "_signature": "Zqzwj8nc3kQyDEaJDLXPZ3OaQWMcqCqbcDqg9UrXx07UPw6l9SoqVd7XM3Gy0BjSb4UzE6tFPOvF2vftSwfeSntLVXKB3e8aGT5YLkMsAsFIaWPPw9GDnRQXfW1XN1NG",
    "allow_hosts": ["vr.realsee.com"],
    "base_url": "https://vrlab-public.ljcdn.com/release/auto3dhd/21e0223a1d01e2e15f30f7ddf4a3b08a/",
    "certificate": "MIIEMzCCAhsCFF+XHU1Q5tsR5m/rvB8Fbd2P5H4xMA0GCSqGSIb3DQEBCwUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwIBcNMjIxMDI2MDY1MjA0WhgPMjA1MDEwMTgwNjUyMDRaMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwggGiMA0GCSqGSIb3DQEBAQUAA4IBjwAwggGKAoIBgQD1/65yDrNp+f3bhns7RMdxj+rnLl5nvRY78JA1IxTl+LQV5seBN7mHdfgzK3KOabDDjIthCEfBWq8q7pWYGRJzfqS/kKX5GZpZUjMX+b0W7HJe+xYRmBTOi+6fyi5D0/3rJxdqDTN3Fkg5Xg8aNF8Fz8IuN4HKPpHCWgFkbKWYs2nMNBEYvF+jKAI+JmGPJ3uef82IPr1QcHcJrkakxOXOm6EwQnUPWMXMR5BQm5oY4QpIpLxwF8s8nAYFL7F/r2HG1Aco8YrxWDlUCUgEVrHTtjLxQQRRyMJUxjaoIDgQ9J2aMolRkKP4KVB7BqLK+Qs+lRUE9qIO48XYqYAKwcsDQbCmaTWM/e7Yl2VVIcR1NwezIrpOpQIbJhE2l8pPxEfA5UgQP5M1X3LgZJGVrYgVCVEwU7RqhHbWGPnmcKYM59nkzFQegwQXy6vrx7iU5afEQxCBXa6zSQd87/EE2qk8D+Xv7t0M6cFnCcQ3GSQPjOzeXvJUFUsl6Yck9h0CAwEAATANBgkqhkiG9w0BAQsFAAOCAgEArYZfKnrQRbxLr1t3RherIHqsNyvxYajNUajNJh3QfGeMf/vEQhIj6z2WMIA6hxEYYHvRqglrHtHIhGwLwPZCPtB3FKQcoFynBXtZzmMjVN3FtZ2ZLgFXnGJ4RfnmAjwRDQJIOv9n1vYvAnqIBVRpT1MlVdCuUw9H5f2PYdELoHNjH7QnkaYYFJcPzPZw93ZoVCuKrqUCPQEQCPxDf6FaZXHBYkqQITSk6IQnB5+/rGBro3IsWFKs0XDXqOoDU7wQH+vBJEBMDPJu9ZNFTjCDNhDl2U+t0mV++cPDvh6JOe+OQJwG1R+MNvgBtJcXIg/RzNfJNqGfvMMUcj+48LfVMvSYdpVxLu7T0Hv8L0TSAOTXhjyDUcb8jFS0YGF2ORRITl0YTjWtOvxvuJZGN/hUD/NBQq2+GXqktIdQiWQkB8rLgKmXlq3nnX/RGLFUWtRNDIfk4TKQf8VPX08Fa6Zzsltpl6RLFZLgVQdCQnWTE6X9sPQzgW/VmPdJ3q4mXHCuaZnOxOVJx/ZviGPQLy5XZmuqWF7/97yp5gKrEWiEa/zq5jxpCPrZ59h0JsIkYak0n3McN5WfhO36AxcJJdZ7XrzLNnlhYhHZdQA8aiMMEgSIwPtKRm1g8lrHp0l0Ul0E8cPLVvmUk+wBuqLKZF4RnH1BoSU=",
    "create_time": null,
    "expire_at": "1956787985394",
    "expire_time": null,
    "initial": {
      "flag_position": [0, 0, 0],
      "fov": 110,
      "heading": 0,
      "latitude": 0,
      "longitude": 0,
      "pano_index": 0,
      "position": [0, 0, 0],
      "mode": "Panorama"
    },
    "model": {
      "file_url": "model/auto3d.at3d",
      "material_base_url": "materials/",
      "material_textures": [
        "texture_0.jpg",
        "texture_1.jpg",
        "texture_2.jpg",
        "texture_3.jpg",
        "texture_4.jpg",
        "texture_5.jpg",
        "texture_6.jpg",
        "texture_7.jpg",
        "texture_8.jpg",
        "texture_9.jpg",
        "texture_10.jpg",
        "texture_11.jpg",
        "texture_12.jpg",
        "texture_13.jpg",
        "texture_14.jpg",
        "texture_15.jpg",
        "texture_16.jpg",
        "texture_17.jpg",
        "texture_18.jpg",
        "texture_19.jpg",
        "texture_20.jpg",
        "texture_21.jpg",
        "texture_22.jpg",
        "texture_23.jpg",
        "texture_24.jpg",
        "texture_25.jpg",
        "texture_26.jpg"
      ],
      "modify_time": "2023-02-14 09:24:45"
    },
    "modify_time": "2023-02-14 09:24:45",
    "observers": [{
      "accessible_nodes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      "floor_index": 0,
      "index": 0,
      "offset_point_count": 0,
      "position": [-3.04697, 1.2, -1.59149],
      "quaternion": {
        "w": 0.7071067811865475,
        "x": 0,
        "y": 0.7071067811865475,
        "z": 0
      },
      "standing_position": [-3.04697, 0, -1.59149],
      "visible_nodes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    }, {
      "accessible_nodes": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
      "floor_index": 0,
      "index": 1,
      "offset_point_count": 0,
      "position": [-4.81071, 1.2, -1.35991],
      "quaternion": {
        "w": 0.7071067811865475,
        "x": 0,
        "y": 0.7071067811865475,
        "z": 0
      },
      "standing_position": [-4.81071, 0, -1.35991],
      "visible_nodes": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    }],
    "panorama": {
      "count": 36,
      "list": [{
        "back": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/back.jpg",
        "down": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/down.jpg",
        "front": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/front.jpg",
        "index": 0,
        "left": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/left.jpg",
        "right": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/right.jpg",
        "tiles": [{
          "back": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/6/back.jpg",
          "down": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/6/down.jpg",
          "front": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/6/front.jpg",
          "left": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/6/left.jpg",
          "right": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/6/right.jpg",
          "up": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/6/up.jpg"
        }, {
          "back": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/back.jpg",
          "down": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/down.jpg",
          "front": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/front.jpg",
          "left": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/left.jpg",
          "right": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/right.jpg",
          "up": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/up.jpg"
        }],
        "up": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/6/up.jpg"
      }, {
        "back": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/back.jpg",
        "down": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/down.jpg",
        "front": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/front.jpg",
        "index": 1,
        "left": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/left.jpg",
        "right": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/right.jpg",
        "tiles": [{
          "back": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/7/back.jpg",
          "down": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/7/down.jpg",
          "front": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/7/front.jpg",
          "left": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/7/left.jpg",
          "right": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/7/right.jpg",
          "up": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_1024/7/up.jpg"
        }, {
          "back": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/back.jpg",
          "down": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/down.jpg",
          "front": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/front.jpg",
          "left": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/left.jpg",
          "right": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/right.jpg",
          "up": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/up.jpg"
        }],
        "up": "panorama_6e05b749df9c86afe1f762b94d9f6b6b/cube_2048/7/up.jpg"
      }]
    }
  } as WorkState
}

const VRScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [five, setFive] = useState<Five | null>(null)

  useEffect(() => {
    if (!containerRef.current || five) return

    // 初始化Five场景
    const fiveInstance = new Five({
      // 指定容器
      container: containerRef.current,
      // 模型数据
      work: DEMO_DATA.work,
      // 配置项
      imageOptions: { size: 512 },
      setupChecker: false,
      textureOptions: { size: 1024 }
    } as FiveInitArgs)

    // 开始加载
    fiveInstance.load(DEMO_DATA.work).then(() => {
      console.log('Five场景加载完成')
    })

    setFive(fiveInstance)

    // 销毁Five实例
    return () => {
      if (fiveInstance) {
        fiveInstance.dispose()
      }
    }
  }, [])

  return (
    <div className="vr-scene-container">
      <div className="vr-container" ref={containerRef}></div>

      {five && (
        <VreoProvider five={five}>
          <VreoUnit>
            <ModelViewPlugin />
            <PanoCompassPlugin />
            <PanoRulerPlugin />
            <TopviewPlugin />
          </VreoUnit>
        </VreoProvider>
      )}
    </div>
  )
}

export default VRScene

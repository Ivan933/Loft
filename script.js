TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_300A6834_21BF_740C_4191_B4DC192F7430",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_131443_2988343_equi",
  "frames": [
   {
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2EFCF129_2042_9404_41B4_77BC4D6FBA68",
      "bleachingDistance": 0.61,
      "bleaching": 0.25,
      "yaw": 39.09,
      "pitch": 41.13
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_31B331B7_2041_740C_41B5_F3AA19CEE885",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "data": {
       "label": "1"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 162.44,
        "hfov": 7.71,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76
        },
        "pitch": -9.29
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_t.jpg"
   }
  ],
  "hfovMax": 130,
  "audios": [
   {
    "class": "PanoramaAudio",
    "id": "audio_03268FCB_23DE_8C04_41B7_47CF1456D96C",
    "audio": {
     "id": "audioresource_021C8BBC_23DE_F47C_41B5_4CEF294B70EA",
     "mp3Url": "media/audio_03268FCB_23DE_8C04_41B7_47CF1456D96C.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_03268FCB_23DE_8C04_41B7_47CF1456D96C.ogg"
    },
    "autoplay": true,
    "data": {
     "label": "freetousesounds - Forest Sounds Germany ! Crows, Birds & Soft Wind! Royalty Free"
    }
   }
  ],
  "vfov": 180
 },
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true
 },
 {
  "initialPosition": {
   "hfov": 121,
   "class": "PanoramaCameraPosition",
   "yaw": 161.85,
   "pitch": -4.5
  },
  "class": "PanoramaCamera",
  "id": "panorama_300A6834_21BF_740C_4191_B4DC192F7430_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 20.68,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 20.68,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 20.68,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 4000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 20.68,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 20.68,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 20.68,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_30F21934_2046_B127_41BB_DAC283B8C0C4",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_133141_2988359_equi_equi_equi",
  "frames": [
   {
    "overlays": [
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_320BF5C4_204E_BC0C_41B1_1458C08DD8C6",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "data": {
       "label": "1"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 122.34,
        "hfov": 7.77,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76
        },
        "pitch": -6.15
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_380E294A_2046_B404_415E_1ED2F98AF9FE",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 1.68,
        "hfov": 6.81,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 150,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.28
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3736A95B_2041_7404_41B2_6E757B81FF61",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -22,
        "hfov": 6.81,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 150,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.28
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_37FADBCB_20CE_9404_41C0_1CA0642CBB79",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 0.96,
        "hfov": 5.61,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 150,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 44.09
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3A5C0A59_20CE_9404_41A8_FAC09C88AD7E",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 0.95,
        "hfov": 12.33,
        "image": {
         "levels": [
          {
           "height": 261,
           "width": 328,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 43.87
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_381C73D1_20C3_7404_4177_7E799D93CDD6",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -10.54,
        "hfov": 7.81,
        "image": {
         "levels": [
          {
           "height": 149,
           "width": 149,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.45
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3D6136C9_20C2_9C04_41AB_AC4DF30B06AD",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -10.46,
        "hfov": 14.94,
        "image": {
         "levels": [
          {
           "height": 269,
           "width": 286,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.41
       }
      ]
     },
     {
      "hfov": 50.4,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0",
      "rotate": false,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 600,
         "width": 600,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_t.jpg"
   }
  ],
  "hfovMax": 145,
  "vfov": 180
 },
 {
  "initialPosition": {
   "hfov": 139,
   "class": "PanoramaCameraPosition",
   "yaw": -12.47,
   "pitch": -0.75
  },
  "class": "PanoramaCamera",
  "id": "panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.74,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.74,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_133102_2988343_equi",
  "frames": [
   {
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_13496E67_1FC2_9320_41BC_86E9D57C82B9",
      "bleachingDistance": 0.54,
      "bleaching": 0.2,
      "yaw": -146.51,
      "pitch": 43.88
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_336E6D18_204E_8C04_41BA_B63D91FEE0A8",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "data": {
       "label": "1"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -169.64,
        "hfov": 7.76,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76
        },
        "pitch": -6.84
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2A1C7860_24C8_80B5_41A1_4C6CA3659E91",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -138.21,
        "hfov": 7.79,
        "image": {
         "levels": [
          {
           "height": 149,
           "width": 149,
           "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.71
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2BFF682F_24C8_808B_41A9_B159BFC37BE8",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -138.35,
        "hfov": 19.19,
        "image": {
         "levels": [
          {
           "height": 278,
           "width": 369,
           "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.77
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_342CB9EC_24C7_838D_4174_4A3AF92C2129",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 112.39,
        "hfov": 7.79,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 150,
           "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.13
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_35EFAA0F_24C9_808B_4196_A0ED5B331CAD",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 112.39,
        "hfov": 14.52,
        "image": {
         "levels": [
          {
           "height": 295,
           "width": 279,
           "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.32
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_t.jpg"
   }
  ],
  "hfovMax": 150,
  "audios": [
   {
    "class": "PanoramaAudio",
    "id": "audio_021CEBBC_23DE_F47C_41BC_4045005A62B9",
    "audio": "this.audioresource_021C8BBC_23DE_F47C_41B5_4CEF294B70EA",
    "autoplay": true,
    "data": {
     "label": "freetousesounds - Forest Sounds Germany ! Crows, Birds & Soft Wind! Royalty Free"
    }
   }
  ],
  "vfov": 180
 },
 {
  "initialPosition": {
   "hfov": 132,
   "class": "PanoramaCameraPosition",
   "yaw": -16.52,
   "pitch": 0.66
  },
  "class": "PanoramaCamera",
  "id": "panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.74,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.6,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetYaw": 176.91,
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_32226143_21C1_B404_41A3_B2BFB2BF847D",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_133726_21483500_equi_equi",
  "frames": [
   {
    "overlays": [
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3C46D730_20C2_9C04_418B_6B36959AD1B9",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "data": {
       "label": "1"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 100,
        "hfov": 5.58,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76
        },
        "pitch": -44.38
       }
      ]
     },
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_tcap0",
      "rotate": false,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 600,
         "width": 600,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_t.jpg"
   }
  ],
  "hfovMax": 130,
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 169.49,
   "pitch": -18.53
  },
  "class": "PanoramaCamera",
  "id": "panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": []
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.15,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetYaw": -68.26,
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_133557_2988359_equi",
  "frames": [
   {
    "overlays": [
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_346D129F_2043_F43C_41BB_0A76583A131D",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -18.44,
        "hfov": 7.15,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 150,
           "url": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.79
       }
      ]
     },
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_tcap0",
      "rotate": false,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 600,
         "width": 600,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_t.jpg"
   }
  ],
  "hfovMax": 130,
  "vfov": 180
 },
 {
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": -152.53,
   "pitch": -9.71
  },
  "class": "PanoramaCamera",
  "id": "panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.21,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.62,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetYaw": 81.37,
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_3B1FE36A_2047_F404_41B3_339204931C1C",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_134431_33460265_equi_equi",
  "frames": [
   {
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_38214932_23C1_B404_41A7_7998E9372FB6",
      "bleachingDistance": 0.5,
      "bleaching": 0.38,
      "yaw": 30.3,
      "pitch": 36.19
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3A893C45_23C2_8C0C_41AA_8A9470D5588C",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "data": {
       "label": "1"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 93.24,
        "hfov": 7.12,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76
        },
        "pitch": 24.25
       }
      ]
     },
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_3B1FE36A_2047_F404_41B3_339204931C1C_tcap0",
      "rotate": false,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 600,
         "width": 600,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_t.jpg"
   }
  ],
  "hfovMax": 147,
  "vfov": 180
 },
 {
  "initialPosition": {
   "hfov": 142,
   "class": "PanoramaCameraPosition",
   "yaw": 118.4,
   "pitch": 7.14
  },
  "class": "PanoramaCamera",
  "id": "panorama_3B1FE36A_2047_F404_41B3_339204931C1C_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.21,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.22,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetYaw": -86.65,
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_134139_13990890_equi_equi",
  "frames": [
   {
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_2F400739_204F_7C04_4181_D06815854970",
      "bleachingDistance": 0.57,
      "bleaching": 0.3,
      "yaw": 129.96,
      "pitch": 38.93
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_34440B92_2042_B404_41A1_5FFA24B556E8",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "data": {
       "label": "1"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -32.44,
        "hfov": 7.34,
        "image": {
         "levels": [
          {
           "height": 90,
           "width": 2400,
           "url": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "frameDuration": 76
        },
        "pitch": 20
       }
      ]
     },
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_tcap0",
      "rotate": false,
      "inertia": false,
      "image": {
       "levels": [
        {
         "height": 600,
         "width": 600,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_t.jpg"
   }
  ],
  "hfovMax": 140,
  "vfov": 180
 },
 {
  "initialPosition": {
   "hfov": 134,
   "class": "PanoramaCameraPosition",
   "yaw": 173.65,
   "pitch": 15.07
  },
  "class": "PanoramaCamera",
  "id": "panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.21,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 11.2,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetYaw": -16.92,
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_135814_481531_equi",
  "frames": [
   {
    "overlays": [
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3501DA02_24C8_8075_41A5_A469BBA5C5DC",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -151.25,
        "hfov": 7.42,
        "image": {
         "levels": [
          {
           "height": 149,
           "width": 149,
           "url": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 18.3
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_36B9529A_24C9_8195_41B3_A25C67546C68",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -151.18,
        "hfov": 15.26,
        "image": {
         "levels": [
          {
           "height": 287,
           "width": 308,
           "url": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 18.27
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_t.jpg"
   }
  ],
  "hfovMax": 135,
  "vfov": 180
 },
 {
  "initialPosition": {
   "hfov": 128,
   "class": "PanoramaCameraPosition",
   "yaw": 174.28,
   "pitch": 12.98
  },
  "class": "PanoramaCamera",
  "id": "panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.74,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.74,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 4.89,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetYaw": -109.72,
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  }
 },
 {
  "partial": false,
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5",
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_t.jpg",
  "pitch": 0,
  "label": "IMG_20200823_131953_2988343_equi",
  "frames": [
   {
    "overlays": [
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_352D29D8_24C8_8395_41BE_EE44F77ECD46",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 143.27,
        "hfov": 7.61,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 150,
           "url": "media/panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.98
       }
      ]
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_368649A0_24CB_83B5_41B1_8B9214F29DDE",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 143.28,
        "hfov": 16.75,
        "image": {
         "levels": [
          {
           "height": 280,
           "width": 329,
           "url": "media/panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 12.84
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_t.jpg"
   }
  ],
  "hfovMax": 130,
  "vfov": 180
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.27,
   "pitch": 5.34
  },
  "class": "PanoramaCamera",
  "id": "panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_camera",
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 21.21,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 21.21,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "timeToIdle": 3000,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 10.38,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetYaw": -124.27,
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_230C6D74_3771_EFB5_4184_499EA4DF710C_t.jpg",
  "label": "animation-maker-for-instagram-posts-featuring-kinetic-typography-210",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_230C6D74_3771_EFB5_4184_499EA4DF710C.mp4",
   "width": 1080,
   "class": "VideoResource"
  },
  "width": 1080,
  "id": "video_230C6D74_3771_EFB5_4184_499EA4DF710C",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430",
    "camera": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_3A7903B6_36F3_5AB5_41C2_3042783C4DFC, false, -1, this.effect_3960BE59_36F1_6DFF_41C1_55CE9736004D, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_3A7903B6_36F3_5AB5_41C2_3042783C4DFC, false, -1, this.effect_3960BE59_36F1_6DFF_41C1_55CE9736004D, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.HTMLText_3A7903B6_36F3_5AB5_41C2_3042783C4DFC, true, -1, this.effect_39609E59_36F1_6DFF_41BF_944238CBDA39, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4",
    "camera": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_39E70812_36F7_D54D_41C2_3FF86F818438, false, -1, this.effect_3960FE5A_36F1_6DFD_41B0_90FE974D706E, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_39E70812_36F7_D54D_41C2_3FF86F818438, false, -1, this.effect_3960FE5A_36F1_6DFD_41B0_90FE974D706E, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.HTMLText_39E70812_36F7_D54D_41C2_3FF86F818438, true, -1, this.effect_3960CE5A_36F1_6DFD_41C9_CC45642F7EE4, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6",
    "camera": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_385436F9_36F3_FABF_41BC_998C9D24D6B2, false, -1, this.effect_39602E5A_36F1_6DFD_41BB_6C0432D400BA, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_385436F9_36F3_FABF_41BC_998C9D24D6B2, false, -1, this.effect_39602E5A_36F1_6DFD_41BB_6C0432D400BA, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.HTMLText_385436F9_36F3_FABF_41BC_998C9D24D6B2, true, -1, this.effect_39603E5A_36F1_6DFD_4117_1D0F13EEA980, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D",
    "camera": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_38CD8D97_3711_6F73_419E_324BCBEA2B59, false, -1, this.effect_26A51A3C_3731_75B5_41C6_274882556A4B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_38CD8D97_3711_6F73_419E_324BCBEA2B59, false, -1, this.effect_26A51A3C_3731_75B5_41C6_274882556A4B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.HTMLText_38CD8D97_3711_6F73_419E_324BCBEA2B59, true, -1, this.effect_26A4EA3C_3731_75B5_41C8_C763A1270C64, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8",
    "camera": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_3983CBD7_36F1_6AF3_41A1_83968273F808, false, -1, this.effect_27750221_3713_D54F_41AB_735C8009C8F6, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_3983CBD7_36F1_6AF3_41A1_83968273F808, false, -1, this.effect_27750221_3713_D54F_41AB_735C8009C8F6, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.HTMLText_3983CBD7_36F1_6AF3_41A1_83968273F808, true, -1, this.effect_27753221_3713_D54F_41B0_5B046AE5103A, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C",
    "camera": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_245777A1_3731_7B4F_41C6_CD06F4A9CE7A, false, -1, this.effect_26A54A3C_3731_75B5_4172_06FA7CBAD6C4, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_245777A1_3731_7B4F_41C6_CD06F4A9CE7A, false, -1, this.effect_26A54A3C_3731_75B5_4172_06FA7CBAD6C4, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.HTMLText_245777A1_3731_7B4F_41C6_CD06F4A9CE7A, true, -1, this.effect_26A55A3C_3731_75B5_41CB_293BF1D4A3A6, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6",
    "camera": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_229A3276_3732_B5B5_41C2_6ADF1F18CB1F, false, -1, this.effect_26A59A3D_3731_75B7_41C0_B37187B8C6EB, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_229A3276_3732_B5B5_41C2_6ADF1F18CB1F, false, -1, this.effect_26A59A3D_3731_75B7_41C0_B37187B8C6EB, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.HTMLText_229A3276_3732_B5B5_41C2_6ADF1F18CB1F, true, -1, this.effect_26A56A3C_3731_75B5_41BB_6064FEE165B5, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7",
    "camera": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_24510D33_3732_EFB3_41C9_AA17216AECCE, false, -1, this.effect_226ED134_3711_77B5_4172_D0CD54960E36, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_24510D33_3732_EFB3_41C9_AA17216AECCE, false, -1, this.effect_226ED134_3711_77B5_4172_D0CD54960E36, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.HTMLText_24510D33_3732_EFB3_41C9_AA17216AECCE, true, -1, this.effect_226E8134_3711_77B5_415B_591A0F9B74B8, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5",
    "camera": "this.panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_2698740E_3731_5D55_41C0_17283F8850D3, false, -1, this.effect_226F2135_3711_77B7_41AC_D2A784484662, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2698740E_3731_5D55_41C0_17283F8850D3, false, -1, this.effect_226F2135_3711_77B7_41AC_D2A784484662, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.setComponentVisibility(this.HTMLText_2698740E_3731_5D55_41C0_17283F8850D3, true, -1, this.effect_226F1135_3711_77B7_41C8_6AE91DA73E5A, 'showEffect', false)"
   },
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.video_230C6D74_3771_EFB5_4184_499EA4DF710C",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9, this.video_230C6D74_3771_EFB5_4184_499EA4DF710C)",
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerVideoPlayer"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430",
    "camera": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_3A7903B6_36F3_5AB5_41C2_3042783C4DFC, false, -1, this.effect_3960BE59_36F1_6DFF_41C1_55CE9736004D, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_3A7903B6_36F3_5AB5_41C2_3042783C4DFC, false, -1, this.effect_3960BE59_36F1_6DFF_41C1_55CE9736004D, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 0, 1); this.setComponentVisibility(this.HTMLText_3A7903B6_36F3_5AB5_41C2_3042783C4DFC, true, -1, this.effect_39609E59_36F1_6DFF_41BF_944238CBDA39, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4",
    "camera": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_39E70812_36F7_D54D_41C2_3FF86F818438, false, -1, this.effect_3960FE5A_36F1_6DFD_41B0_90FE974D706E, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_39E70812_36F7_D54D_41C2_3FF86F818438, false, -1, this.effect_3960FE5A_36F1_6DFD_41B0_90FE974D706E, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 1, 2); this.setComponentVisibility(this.HTMLText_39E70812_36F7_D54D_41C2_3FF86F818438, true, -1, this.effect_3960CE5A_36F1_6DFD_41C9_CC45642F7EE4, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6",
    "camera": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_385436F9_36F3_FABF_41BC_998C9D24D6B2, false, -1, this.effect_39602E5A_36F1_6DFD_41BB_6C0432D400BA, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_385436F9_36F3_FABF_41BC_998C9D24D6B2, false, -1, this.effect_39602E5A_36F1_6DFD_41BB_6C0432D400BA, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 2, 3); this.setComponentVisibility(this.HTMLText_385436F9_36F3_FABF_41BC_998C9D24D6B2, true, -1, this.effect_39603E5A_36F1_6DFD_4117_1D0F13EEA980, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D",
    "camera": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_38CD8D97_3711_6F73_419E_324BCBEA2B59, false, -1, this.effect_26A51A3C_3731_75B5_41C6_274882556A4B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_38CD8D97_3711_6F73_419E_324BCBEA2B59, false, -1, this.effect_26A51A3C_3731_75B5_41C6_274882556A4B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 3, 4); this.setComponentVisibility(this.HTMLText_38CD8D97_3711_6F73_419E_324BCBEA2B59, true, -1, this.effect_26A4EA3C_3731_75B5_41C8_C763A1270C64, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8",
    "camera": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_3983CBD7_36F1_6AF3_41A1_83968273F808, false, -1, this.effect_27750221_3713_D54F_41AB_735C8009C8F6, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_3983CBD7_36F1_6AF3_41A1_83968273F808, false, -1, this.effect_27750221_3713_D54F_41AB_735C8009C8F6, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 4, 5); this.setComponentVisibility(this.HTMLText_3983CBD7_36F1_6AF3_41A1_83968273F808, true, -1, this.effect_27753221_3713_D54F_41B0_5B046AE5103A, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C",
    "camera": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_245777A1_3731_7B4F_41C6_CD06F4A9CE7A, false, -1, this.effect_26A54A3C_3731_75B5_4172_06FA7CBAD6C4, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_245777A1_3731_7B4F_41C6_CD06F4A9CE7A, false, -1, this.effect_26A54A3C_3731_75B5_4172_06FA7CBAD6C4, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 5, 6); this.setComponentVisibility(this.HTMLText_245777A1_3731_7B4F_41C6_CD06F4A9CE7A, true, -1, this.effect_26A55A3C_3731_75B5_41CB_293BF1D4A3A6, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6",
    "camera": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_229A3276_3732_B5B5_41C2_6ADF1F18CB1F, false, -1, this.effect_26A59A3D_3731_75B7_41C0_B37187B8C6EB, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_229A3276_3732_B5B5_41C2_6ADF1F18CB1F, false, -1, this.effect_26A59A3D_3731_75B7_41C0_B37187B8C6EB, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 6, 7); this.setComponentVisibility(this.HTMLText_229A3276_3732_B5B5_41C2_6ADF1F18CB1F, true, -1, this.effect_26A56A3C_3731_75B5_41BB_6064FEE165B5, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7",
    "camera": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_24510D33_3732_EFB3_41C9_AA17216AECCE, false, -1, this.effect_226ED134_3711_77B5_4172_D0CD54960E36, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_24510D33_3732_EFB3_41C9_AA17216AECCE, false, -1, this.effect_226ED134_3711_77B5_4172_D0CD54960E36, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 7, 8); this.setComponentVisibility(this.HTMLText_24510D33_3732_EFB3_41C9_AA17216AECCE, true, -1, this.effect_226E8134_3711_77B5_415B_591A0F9B74B8, 'showEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5",
    "camera": "this.panorama_28CBC7A7_24C8_8FBC_41B4_221EEC51ECD5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.HTMLText_2698740E_3731_5D55_41C0_17283F8850D3, false, -1, this.effect_226F2135_3711_77B7_41AC_D2A784484662, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_2698740E_3731_5D55_41C0_17283F8850D3, false, -1, this.effect_226F2135_3711_77B7_41AC_D2A784484662, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 8, 9); this.setComponentVisibility(this.HTMLText_2698740E_3731_5D55_41C0_17283F8850D3, true, -1, this.effect_226F1135_3711_77B7_41C8_6AE91DA73E5A, 'showEffect', false)"
   },
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 9, 0)",
    "media": "this.video_230C6D74_3771_EFB5_4184_499EA4DF710C",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 9, this.video_230C6D74_3771_EFB5_4184_499EA4DF710C)"
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "id": "effect_39609E59_36F1_6DFF_41BF_944238CBDA39",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3960BE59_36F1_6DFF_41C1_55CE9736004D",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_3960CE5A_36F1_6DFD_41C9_CC45642F7EE4",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_3960FE5A_36F1_6DFD_41B0_90FE974D706E",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_39603E5A_36F1_6DFD_4117_1D0F13EEA980",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_39602E5A_36F1_6DFD_41BB_6C0432D400BA",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_26A4EA3C_3731_75B5_41C8_C763A1270C64",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_26A51A3C_3731_75B5_41C6_274882556A4B",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_27753221_3713_D54F_41B0_5B046AE5103A",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_27750221_3713_D54F_41AB_735C8009C8F6",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_26A55A3C_3731_75B5_41CB_293BF1D4A3A6",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_26A54A3C_3731_75B5_4172_06FA7CBAD6C4",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_26A56A3C_3731_75B5_41BB_6064FEE165B5",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_26A59A3D_3731_75B7_41C0_B37187B8C6EB",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_226E8134_3711_77B5_415B_591A0F9B74B8",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_226ED134_3711_77B5_4172_D0CD54960E36",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "id": "effect_226F1135_3711_77B7_41C8_6AE91DA73E5A",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "id": "effect_226F2135_3711_77B7_41AC_D2A784484662",
  "duration": 1000,
  "easing": "cubic_in_out"
 },
 "this.effect_39609E59_36F1_6DFF_41BF_944238CBDA39",
 "this.effect_3960BE59_36F1_6DFF_41C1_55CE9736004D",
 "this.effect_3960CE5A_36F1_6DFD_41C9_CC45642F7EE4",
 "this.effect_3960FE5A_36F1_6DFD_41B0_90FE974D706E",
 "this.effect_39603E5A_36F1_6DFD_4117_1D0F13EEA980",
 "this.effect_39602E5A_36F1_6DFD_41BB_6C0432D400BA",
 "this.effect_26A4EA3C_3731_75B5_41C8_C763A1270C64",
 "this.effect_26A51A3C_3731_75B5_41C6_274882556A4B",
 "this.effect_27753221_3713_D54F_41B0_5B046AE5103A",
 "this.effect_27750221_3713_D54F_41AB_735C8009C8F6",
 "this.effect_26A55A3C_3731_75B5_41CB_293BF1D4A3A6",
 "this.effect_26A54A3C_3731_75B5_4172_06FA7CBAD6C4",
 "this.effect_26A56A3C_3731_75B5_41BB_6064FEE165B5",
 "this.effect_26A59A3D_3731_75B7_41C0_B37187B8C6EB",
 "this.effect_226E8134_3711_77B5_415B_591A0F9B74B8",
 "this.effect_226ED134_3711_77B5_4172_D0CD54960E36",
 "this.effect_226F1135_3711_77B7_41C8_6AE91DA73E5A",
 "this.effect_226F2135_3711_77B7_41AC_D2A784484662",
 "this.audio_03268FCB_23DE_8C04_41B7_47CF1456D96C",
 "this.audio_021CEBBC_23DE_F47C_41BC_4045005A62B9"
], "children": [
 {
  "progressBarBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBottom": 5,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipBorderSize": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderColor": "#CCCCCC",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadWidth": 6,
  "toolTipFontColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarRight": 0,
  "playbackBarHeight": 10,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderRadius": 0,
  "minHeight": 50,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "minWidth": 100,
  "progressBarBorderRadius": 0,
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontWeight": "normal",
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "toolTipTextShadowOpacity": 0,
  "paddingRight": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderSize": 0,
  "height": "100%",
  "playbackBarBackgroundOpacity": 1,
  "progressLeft": 0,
  "progressBottom": 0,
  "toolTipFontStyle": "normal",
  "toolTipFontSize": 12,
  "width": "100%",
  "shadow": false,
  "transitionDuration": 500,
  "progressHeight": 10,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "propagateClick": false,
  "playbackBarHeadShadowOpacity": 0.7,
  "top": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadow": true,
  "toolTipShadowColor": "#333333",
  "id": "MainViewer",
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingBottom": 4,
  "progressBarOpacity": 1,
  "playbackBarLeft": 0,
  "progressBorderSize": 3,
  "toolTipShadowVerticalLength": 0,
  "paddingLeft": 0,
  "transitionMode": "blending",
  "borderRadius": 0,
  "playbackBarHeadHeight": 15,
  "class": "ViewerArea",
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "left": 0
 },
 {
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "paddingBottom": 10,
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailShadowSpread": 1,
    "verticalAlign": "top",
    "backgroundColor": [
     "#000000"
    ],
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowHorizontalLength": 3,
    "scrollBarColor": "#FFFFFF",
    "width": 800,
    "itemMode": "thumbnail-only",
    "height": 112.8,
    "gap": 7,
    "paddingRight": 20,
    "itemThumbnailShadowColor": "#000000",
    "itemPaddingRight": 3,
    "itemLabelTextDecoration": "none",
    "paddingTop": 10,
    "itemThumbnailWidth": 100,
    "itemThumbnailShadowBlurRadius": 4,
    "backgroundColorDirection": "vertical",
    "itemHorizontalAlign": "center",
    "maxHeight": 600,
    "maxWidth": 800,
    "itemThumbnailHeight": 75,
    "itemPaddingTop": 3,
    "itemLabelGap": 5,
    "itemThumbnailScaleMode": "fit_outside",
    "itemBackgroundOpacity": 0,
    "propagateClick": false,
    "shadow": false,
    "itemOpacity": 1,
    "scrollBarMargin": 2,
    "selectedItemLabelFontWeight": "bold",
    "itemVerticalAlign": "middle",
    "itemBackgroundColorDirection": "vertical",
    "itemLabelFontSize": 14,
    "borderSize": 0,
    "itemBorderRadius": 0,
    "itemLabelFontFamily": "Arial",
    "horizontalAlign": "left",
    "playList": "this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC",
    "itemThumbnailShadowVerticalLength": 3,
    "data": {
     "name": "ThumbnailList582"
    },
    "itemThumbnailShadow": true,
    "itemThumbnailShadowOpacity": 0.8,
    "scrollBarWidth": 10,
    "minHeight": 0,
    "paddingLeft": 20,
    "layout": "horizontal",
    "itemLabelFontWeight": "normal",
    "itemPaddingBottom": 3,
    "minWidth": 0,
    "class": "ThumbnailList",
    "itemPaddingLeft": 3,
    "itemBackgroundColor": [],
    "scrollBarVisible": "rollOver",
    "itemLabelFontColor": "#FFFFFF",
    "borderRadius": 5,
    "itemLabelFontStyle": "normal",
    "itemThumbnailBorderRadius": 5,
    "itemThumbnailOpacity": 1,
    "backgroundOpacity": 0.2,
    "itemBackgroundColorRatios": [],
    "itemLabelPosition": "bottom"
   }
  ],
  "paddingBottom": 0,
  "verticalAlign": "bottom",
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "overflow": "visible",
  "paddingRight": 0,
  "height": 200,
  "gap": 10,
  "paddingTop": 0,
  "horizontalAlign": "center",
  "creationPolicy": "delayed",
  "shadow": false,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "contentOpaque": false,
  "borderSize": 0,
  "bottom": 0,
  "minHeight": 20,
  "scrollBarWidth": 10,
  "data": {
   "name": "Container581"
  },
  "layout": "horizontal",
  "minWidth": 20,
  "paddingLeft": 0,
  "left": 0,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "class": "Container",
  "right": 0,
  "scrollBarOpacity": 0.5
 },
 {
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "toolTipTextShadowOpacity": 0,
  "mode": "toggle",
  "width": 56,
  "height": 34,
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "paddingTop": 0,
  "toolTipPaddingLeft": 6,
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowHorizontalLength": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontSize": 12,
  "toolTip": "Fullscreen",
  "shadow": false,
  "toolTipBorderRadius": 3,
  "maxHeight": 128,
  "maxWidth": 128,
  "propagateClick": false,
  "toolTipBorderColor": "#767676",
  "top": "2.93%",
  "iconURL": "skin/IconButton_3546C784_24C8_807D_41B4_64D3D61DCA9E.png",
  "cursor": "hand",
  "toolTipShadowBlurRadius": 3,
  "borderSize": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "id": "IconButton_3546C784_24C8_807D_41B4_64D3D61DCA9E",
  "toolTipShadowSpread": 0,
  "toolTipFontFamily": "Arial",
  "toolTipTextShadowColor": "#000000",
  "toolTipOpacity": 1,
  "toolTipShadowColor": "#333333",
  "data": {
   "name": "IconButton1493"
  },
  "minHeight": 1,
  "toolTipPaddingBottom": 4,
  "minWidth": 1,
  "paddingLeft": 0,
  "toolTipPaddingRight": 6,
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "toolTipShadowVerticalLength": 0,
  "class": "IconButton",
  "right": "1.19%",
  "horizontalAlign": "center",
  "toolTipFontWeight": "normal",
  "transparencyActive": true,
  "toolTipPaddingTop": 4
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "29.46%",
  "paddingTop": 20,
  "shadow": false,
  "width": "37.457%",
  "propagateClick": false,
  "top": "4.57%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_3A7903B6_36F3_5AB5_41C2_3042783C4DFC",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "loft"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>LOFT</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;\"><B><I>Guzmanes, Putaendo</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:28px;font-family:Tahoma, Geneva, sans-serif;\">A 10 minutos del centro</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.51%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "29.261%",
  "paddingTop": 20,
  "shadow": false,
  "width": "38.399%",
  "propagateClick": false,
  "top": "5.09%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_39E70812_36F7_D54D_41C2_3FF86F818438",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "Mts"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>LOFT 96</B></SPAN><SPAN STYLE=\"color:#ffffff;font-size:36px;\"><B>mts</B></SPAN><SPAN STYLE=\"color:#ffffff;font-size:29px;\"><B>2</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;font-family:Tahoma, Geneva, sans-serif;\"><B><I>Sector La Pe\u00f1a, Guzmanes</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:26px;font-family:Tahoma, Geneva, sans-serif;\">Cocina americana, Living, Comedor</SPAN></SPAN></DIV></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.99%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "27.273%",
  "paddingTop": 20,
  "shadow": false,
  "width": "37.504%",
  "propagateClick": false,
  "top": "7.95%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_385436F9_36F3_FABF_41BC_998C9D24D6B2",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "terraza"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Terraza Panor\u00e1mica</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;font-family:Tahoma, Geneva, sans-serif;\"><B>Vista 360\u00b0</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.2%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "31.96%",
  "paddingTop": 20,
  "shadow": false,
  "width": "45.699%",
  "propagateClick": false,
  "top": "2.47%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_3983CBD7_36F1_6AF3_41A1_83968273F808",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "dormitorio"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Dormitorio</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;\"><B><I>En 2do Piso con vista privilegiada</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "0.71%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "32.926%",
  "paddingTop": 20,
  "shadow": false,
  "width": "42.402%",
  "propagateClick": false,
  "top": "3.21%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_38CD8D97_3711_6F73_419E_324BCBEA2B59",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "dorm2"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Amplio Dormitorio</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;\"><B><I>Cama 2 Plazas y Balc\u00f3n</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.54%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "29.496%",
  "paddingTop": 20,
  "shadow": false,
  "width": "35.879%",
  "propagateClick": false,
  "top": "3.15%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_245777A1_3731_7B4F_41C6_CD06F4A9CE7A",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "Ba\u00f1o1"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Ba\u00f1o 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;\"><B><I>Amplio Ba\u00f1o con WC</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.76%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "29.496%",
  "paddingTop": 20,
  "shadow": false,
  "width": "35.879%",
  "propagateClick": false,
  "top": "3.69%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_229A3276_3732_B5B5_41C2_6ADF1F18CB1F",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "Ba\u00f1o2"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Ba\u00f1o 2</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;\"><B><I>Amplio Ba\u00f1o con Tina</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.59%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "29.496%",
  "paddingTop": 20,
  "shadow": false,
  "width": "35.879%",
  "propagateClick": false,
  "top": "4.57%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_24510D33_3732_EFB3_41C9_AA17216AECCE",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "Ext1"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Vista Exterior</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;font-family:Tahoma, Geneva, sans-serif;\"><B><I>Amplio espacios en un entorno tranquilo</I></B></SPAN><SPAN STYLE=\"font-size:33px;\"><B><I> </I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.35%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 },
 {
  "paddingBottom": 20,
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "paddingRight": 20,
  "height": "29.496%",
  "paddingTop": 20,
  "shadow": false,
  "width": "35.879%",
  "propagateClick": false,
  "top": "4.2%",
  "visible": false,
  "borderSize": 0,
  "id": "HTMLText_2698740E_3731_5D55_41C0_17283F8850D3",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "data": {
   "name": "Ext2"
  },
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Vista Exterior 2</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;font-family:Tahoma, Geneva, sans-serif;\"><B><I>Panel solar incluido</I></B></SPAN></SPAN></DIV></div>",
  "minWidth": 1,
  "paddingLeft": 20,
  "left": "1.46%",
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "class": "HTMLText",
  "scrollBarOpacity": 0.5
 }
], 
 "paddingBottom": 0,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_3546C784_24C8_807D_41B4_64D3D61DCA9E",
 "paddingRight": 0,
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "creationPolicy": "delayed",
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderSize": 0,
 "vrPolyfillScale": 1,
 "id": "rootPlayer",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "width": "100%",
 "layout": "absolute",
 "data": {
  "name": "Player579"
 },
 "minWidth": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "start": "this.syncPlaylists([this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_3546C784_24C8_807D_41B4_64D3D61DCA9E].forEach(function(component) { component.set('visible', false); }) }",
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true
})
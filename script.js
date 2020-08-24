TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_t.jpg",
  "id": "panorama_300A6834_21BF_740C_4191_B4DC192F7430",
  "hfov": 360,
  "hfovMax": 130,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "bleachingDistance": 0.61,
      "id": "overlay_2EFCF129_2042_9404_41B4_77BC4D6FBA68",
      "bleaching": 0.25,
      "class": "LensFlarePanoramaOverlay",
      "yaw": 39.09,
      "pitch": 41.13
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_31B331B7_2041_740C_41B5_F3AA19CEE885",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 162.44,
        "hfov": 7.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 2400,
           "url": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -9.29
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_300A6834_21BF_740C_4191_B4DC192F7430.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_131443_2988343_equi",
  "audios": [
   {
    "data": {
     "label": "freetousesounds - Forest Sounds Germany ! Crows, Birds & Soft Wind! Royalty Free"
    },
    "id": "audio_03268FCB_23DE_8C04_41B7_47CF1456D96C",
    "autoplay": true,
    "audio": {
     "id": "audioresource_021C8BBC_23DE_F47C_41B5_4CEF294B70EA",
     "oggUrl": "media/audio_03268FCB_23DE_8C04_41B7_47CF1456D96C.ogg",
     "class": "AudioResource",
     "mp3Url": "media/audio_03268FCB_23DE_8C04_41B7_47CF1456D96C.mp3"
    },
    "class": "PanoramaAudio"
   }
  ],
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_300A6834_21BF_740C_4191_B4DC192F7430_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 121,
   "yaw": 161.85,
   "pitch": -4.5
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_t.jpg",
  "id": "panorama_30F21934_2046_B127_41BB_DAC283B8C0C4",
  "hfov": 360,
  "hfovMax": 145,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "hfov": 51.6,
      "id": "panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "inertia": false,
      "angle": 0
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_320BF5C4_204E_BC0C_41B1_1458C08DD8C6",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 122.34,
        "hfov": 7.77,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 2400,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.15
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_380E294A_2046_B404_415E_1ED2F98AF9FE",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 1.68,
        "hfov": 6.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "class": "ImageResourceLevel",
           "width": 150,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -29.28
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_3736A95B_2041_7404_41B2_6E757B81FF61",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -22,
        "hfov": 6.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "class": "ImageResourceLevel",
           "width": 150,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_5_0.png"
          }
         ]
        },
        "pitch": -29.28
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_37FADBCB_20CE_9404_41C0_1CA0642CBB79",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -8.37,
        "hfov": 4.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "class": "ImageResourceLevel",
           "width": 150,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_6_0.png"
          }
         ]
        },
        "pitch": 50.6
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_3A5C0A59_20CE_9404_41A8_FAC09C88AD7E",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -8.31,
        "hfov": 11.1,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 263,
           "class": "ImageResourceLevel",
           "width": 334,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_7_0.png"
          }
         ]
        },
        "pitch": 50.44
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_381C73D1_20C3_7404_4177_7E799D93CDD6",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -10.54,
        "hfov": 7.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 149,
           "class": "ImageResourceLevel",
           "width": 149,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_9_0.png"
          }
         ]
        },
        "pitch": -1.45
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_3D6136C9_20C2_9C04_41AB_AC4DF30B06AD",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -10.46,
        "hfov": 14.94,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 269,
           "class": "ImageResourceLevel",
           "width": 286,
           "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_0_HS_10_0.png"
          }
         ]
        },
        "pitch": -1.41
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_133141_2988359_equi_equi_equi",
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 139,
   "yaw": -12.47,
   "pitch": -0.75
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_t.jpg",
  "id": "panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6",
  "hfov": 360,
  "hfovMax": 150,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "bleachingDistance": 0.54,
      "id": "overlay_13496E67_1FC2_9320_41BC_86E9D57C82B9",
      "bleaching": 0.2,
      "class": "LensFlarePanoramaOverlay",
      "yaw": -146.51,
      "pitch": 43.88
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_336E6D18_204E_8C04_41BA_B63D91FEE0A8",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -169.64,
        "hfov": 7.76,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 2400,
           "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.84
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_133102_2988343_equi",
  "audios": [
   {
    "data": {
     "label": "freetousesounds - Forest Sounds Germany ! Crows, Birds & Soft Wind! Royalty Free"
    },
    "id": "audio_021CEBBC_23DE_F47C_41BC_4045005A62B9",
    "autoplay": true,
    "audio": "this.audioresource_021C8BBC_23DE_F47C_41B5_4CEF294B70EA",
    "class": "PanoramaAudio"
   }
  ],
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 132,
   "yaw": -16.52,
   "pitch": 0.66
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_t.jpg",
  "id": "panorama_32226143_21C1_B404_41A3_B2BFB2BF847D",
  "hfov": 360,
  "hfovMax": 130,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "hfov": 48,
      "id": "panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "inertia": false,
      "angle": 0
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_3C46D730_20C2_9C04_418B_6B36959AD1B9",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 174.37,
        "hfov": 5.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 2400,
           "url": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -44.38
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_32226143_21C1_B404_41A3_B2BFB2BF847D.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_133726_21483500_equi_equi",
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133,
   "pitch": -12.82
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_t.jpg",
  "id": "panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8",
  "hfov": 360,
  "hfovMax": 130,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_346D129F_2043_F43C_41BB_0A76583A131D",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -18.44,
        "hfov": 7.15,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "class": "ImageResourceLevel",
           "width": 150,
           "url": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -23.79
       }
      ]
     },
     {
      "hfov": 44.4,
      "id": "panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_tcap0",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "inertia": false,
      "angle": 0
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_133557_2988359_equi",
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": -98.99,
   "pitch": -16.58
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_t.jpg",
  "id": "panorama_3B1FE36A_2047_F404_41B3_339204931C1C",
  "hfov": 360,
  "hfovMax": 147,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "hfov": 44.4,
      "id": "panorama_3B1FE36A_2047_F404_41B3_339204931C1C_tcap0",
      "rotate": true,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "inertia": false,
      "angle": 0
     },
     {
      "bleachingDistance": 0.5,
      "id": "overlay_38214932_23C1_B404_41A7_7998E9372FB6",
      "bleaching": 0.38,
      "class": "LensFlarePanoramaOverlay",
      "yaw": 30.3,
      "pitch": 36.19
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_3A893C45_23C2_8C0C_41AA_8A9470D5588C",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 93.24,
        "hfov": 7.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 2400,
           "url": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 24.25
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_3B1FE36A_2047_F404_41B3_339204931C1C.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_134431_33460265_equi_equi",
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_3B1FE36A_2047_F404_41B3_339204931C1C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 142,
   "yaw": 168.93,
   "pitch": 1.09
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_t.jpg",
  "id": "panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6",
  "hfov": 360,
  "hfovMax": 140,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "overlays": [
     {
      "hfov": 44.4,
      "id": "panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_tcap0",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_tcap0.png"
        }
       ]
      },
      "class": "TripodCapPanoramaOverlay",
      "inertia": false,
      "angle": 0
     },
     {
      "bleachingDistance": 0.57,
      "id": "overlay_2F400739_204F_7C04_4181_D06815854970",
      "bleaching": 0.3,
      "class": "LensFlarePanoramaOverlay",
      "yaw": 129.96,
      "pitch": 38.93
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_34440B92_2042_B404_41A1_5FFA24B556E8",
      "maps": [],
      "useHandCursor": true,
      "data": {
       "label": "1"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -32.44,
        "hfov": 7.34,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "frameDuration": 76,
         "class": "AnimatedImageResource",
         "colCount": 24,
         "rowCount": 1,
         "levels": [
          {
           "height": 90,
           "class": "ImageResourceLevel",
           "width": 2400,
           "url": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 20
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_134139_13990890_equi_equi",
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 134,
   "yaw": 173.65,
   "pitch": 15.07
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_t.jpg",
  "id": "panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7",
  "hfov": 360,
  "hfovMax": 135,
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "class": "ImageResourceLevel",
       "width": 6912,
       "url": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7.jpeg"
      }
     ]
    }
   }
  ],
  "label": "IMG_20200823_135814_481531_equi",
  "hfovMin": 60,
  "class": "Panorama"
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 128,
   "yaw": 174.28,
   "pitch": 12.98
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "camera": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "camera": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "camera": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "camera": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "camera": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC",
  "items": [
   {
    "camera": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_300A6834_21BF_740C_4191_B4DC192F7430",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 0, 1)"
   },
   {
    "camera": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_30F21934_2046_B127_41BB_DAC283B8C0C4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 1, 2)"
   },
   {
    "camera": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16377C8D_1FC1_B7E1_41B7_83B3C2EFF2C6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 2, 3)"
   },
   {
    "camera": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_32226143_21C1_B404_41A3_B2BFB2BF847D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 3, 4)"
   },
   {
    "camera": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_12A8FEEF_1FC1_9321_4178_10ED912F11F8",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 4, 5)"
   },
   {
    "camera": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3B1FE36A_2047_F404_41B3_339204931C1C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 5, 6)"
   },
   {
    "camera": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_2FE2E122_2042_F404_41B2_B09D9B0860C6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 6, 7)"
   },
   {
    "camera": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_13BFA6A4_1FC7_9327_41A4_D89CCD1279E7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC, 7, 0)"
   }
  ]
 },
 "this.audio_03268FCB_23DE_8C04_41B7_47CF1456D96C",
 "this.audio_021CEBBC_23DE_F47C_41BC_4045005A62B9"
], "children": [
 {
  "progressRight": 0,
  "propagateClick": false,
  "progressOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "shadow": false,
  "paddingRight": 0,
  "playbackBarOpacity": 1,
  "playbackBarBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "progressBarOpacity": 1,
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressHeight": 10,
  "toolTipPaddingTop": 4,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "progressBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "class": "ViewerArea",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#CCCCCC",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "paddingTop": 0,
  "transitionDuration": 500,
  "progressBackgroundColorRatios": [
   0
  ],
  "height": "100%",
  "progressLeft": 0,
  "playbackBarRight": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "width": "100%",
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "playbackBarLeft": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarBorderSize": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "id": "MainViewer",
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 6,
  "playbackBarBackgroundOpacity": 1,
  "toolTipDisplayTime": 600,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "transitionMode": "blending",
  "playbackBarHeadBorderRadius": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontColor": "#000000",
  "toolTipPaddingRight": 6,
  "paddingLeft": 0,
  "playbackBarHeadShadowColor": "#000000",
  "minHeight": 50,
  "toolTipFontFamily": "Arial"
 },
 {
  "class": "Container",
  "layout": "horizontal",
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "children": [
   {
    "itemOpacity": 1,
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "itemLabelGap": 5,
    "borderSize": 0,
    "backgroundColor": [
     "#000000"
    ],
    "itemVerticalAlign": "middle",
    "paddingTop": 10,
    "width": 800,
    "itemThumbnailBorderRadius": 5,
    "itemPaddingLeft": 3,
    "itemThumbnailShadowOpacity": 0.8,
    "height": 112.8,
    "itemHorizontalAlign": "center",
    "maxHeight": 600,
    "borderRadius": 5,
    "gap": 10,
    "backgroundColorDirection": "vertical",
    "itemBackgroundColor": [],
    "itemThumbnailOpacity": 1,
    "itemPaddingRight": 3,
    "itemLabelHorizontalAlign": "center",
    "backgroundOpacity": 0.2,
    "scrollBarWidth": 10,
    "itemThumbnailShadowVerticalLength": 3,
    "itemLabelPosition": "bottom",
    "itemThumbnailScaleMode": "fit_outside",
    "itemLabelFontFamily": "Arial",
    "itemPaddingTop": 3,
    "itemLabelFontWeight": "normal",
    "shadow": false,
    "itemBorderRadius": 0,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingBottom": 3,
    "itemThumbnailShadowColor": "#000000",
    "paddingBottom": 10,
    "verticalAlign": "top",
    "itemLabelTextDecoration": "none",
    "itemBackgroundColorDirection": "vertical",
    "scrollBarColor": "#FFFFFF",
    "propagateClick": false,
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailShadow": true,
    "paddingRight": 20,
    "itemLabelFontStyle": "normal",
    "minWidth": 0,
    "playList": "this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemBackgroundOpacity": 0,
    "selectedItemLabelFontWeight": "bold",
    "scrollBarMargin": 2,
    "itemThumbnailWidth": 100,
    "itemMode": "thumbnail-only",
    "horizontalAlign": "left",
    "maxWidth": 800,
    "itemBackgroundColorRatios": [],
    "data": {
     "name": "ThumbnailList582"
    },
    "itemLabelFontColor": "#FFFFFF",
    "itemThumbnailHeight": 75,
    "itemThumbnailShadowBlurRadius": 4,
    "minHeight": 0,
    "class": "ThumbnailList",
    "paddingLeft": 20,
    "scrollBarOpacity": 0.5,
    "itemLabelFontSize": 14
   }
  ],
  "paddingTop": 0,
  "height": 200,
  "borderRadius": 0,
  "gap": 10,
  "backgroundOpacity": 0,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "overflow": "visible",
  "shadow": false,
  "paddingRight": 0,
  "verticalAlign": "bottom",
  "creationPolicy": "delayed",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "bottom": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "data": {
   "name": "Container581"
  },
  "horizontalAlign": "center",
  "scrollBarOpacity": 0.5,
  "left": 0,
  "right": 0,
  "propagateClick": false,
  "paddingLeft": 0,
  "minHeight": 20
 },
 {
  "class": "IconButton",
  "toolTip": "Fullscreen",
  "right": "1.38%",
  "borderSize": 0,
  "paddingTop": 0,
  "width": 47,
  "toolTipPaddingBottom": 4,
  "height": 35,
  "mode": "toggle",
  "maxHeight": 128,
  "borderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowHorizontalLength": 0,
  "iconURL": "skin/IconButton_34A3FC96_20C6_8C0C_41AB_E5461EE9C01D.png",
  "toolTipTextShadowOpacity": 0,
  "backgroundOpacity": 0,
  "toolTipBorderRadius": 3,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "paddingBottom": 0,
  "shadow": false,
  "paddingRight": 0,
  "top": "2.41%",
  "verticalAlign": "middle",
  "cursor": "hand",
  "toolTipBorderSize": 1,
  "id": "IconButton_34A3FC96_20C6_8C0C_41AB_E5461EE9C01D",
  "minWidth": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipShadowVerticalLength": 0,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipDisplayTime": 600,
  "horizontalAlign": "center",
  "toolTipPaddingTop": 4,
  "toolTipOpacity": 1,
  "maxWidth": 128,
  "toolTipShadowOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipFontColor": "#606060",
  "transparencyActive": true,
  "toolTipPaddingRight": 6,
  "minHeight": 1,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "propagateClick": false,
  "paddingLeft": 0
 }
], 
 "start": "this.syncPlaylists([this.playList_1403AC76_1FC3_9723_41AF_3960E1DF1CAC,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_34A3FC96_20C6_8C0C_41AB_E5461EE9C01D].forEach(function(component) { component.set('visible', false); }) }",
 "class": "Player",
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingTop": 0,
 "width": "100%",
 "height": "100%",
 "borderRadius": 0,
 "gap": 10,
 "buttonToggleFullscreen": "this.IconButton_34A3FC96_20C6_8C0C_41AB_E5461EE9C01D",
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "overflow": "visible",
 "shadow": false,
 "paddingRight": 0,
 "verticalAlign": "top",
 "vrPolyfillScale": 1,
 "creationPolicy": "delayed",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "id": "rootPlayer",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "Player579"
 },
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "propagateClick": false,
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; }
 }
})
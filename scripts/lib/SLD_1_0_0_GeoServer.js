var SLD_1_0_0_GeoServer_Module_Factory = function () {
  var SLD_1_0_0 = {
    n: 'SLD_1_0_0',
    dens: 'http:\/\/www.opengis.net\/sld',
    deps: ['XLink_1_0', 'Filter_1_0_0'],
    tis: [{
        ln: 'RemoteOWS',
        tn: null,
        ps: [{
            n: 'service',
            rq: true,
            en: 'Service'
          }, {
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'PolygonSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'Graphic',
        tn: null,
        ps: [{
            n: 'externalGraphicOrMark',
            mno: 0,
            col: true,
            etis: [{
                en: 'ExternalGraphic',
                ti: '.ExternalGraphic'
              }, {
                en: 'Mark',
                ti: '.Mark'
              }],
            t: 'es'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'size',
            en: 'Size',
            ti: '.ParameterValueType'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'UserLayer',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'inlineFeature',
            rq: true,
            en: 'InlineFeature',
            ti: '.InlineFeature'
          }, {
            n: 'remoteOWS',
            en: 'RemoteOWS',
            ti: '.RemoteOWS'
          }, {
            n: 'layerFeatureConstraints',
            rq: true,
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'userStyle',
            rq: true,
            col: true,
            en: 'UserStyle',
            ti: '.UserStyle'
          }]
      }, {
        ln: 'Histogram',
        tn: null
      }, {
        ln: 'OnlineResource',
        tn: null,
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'SymbolizerType',
        ps: [{
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'LegendGraphic',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'VendorOption',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'StyledLayerDescriptor',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'namedLayerOrUserLayer',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedLayer',
                ti: '.NamedLayer'
              }, {
                en: 'UserLayer',
                ti: '.UserLayer'
              }],
            t: 'es'
          }, {
            n: 'version',
            rq: true,
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'ElseFilter',
        tn: null
      }, {
        ln: 'LayerFeatureConstraints',
        tn: null,
        ps: [{
            n: 'featureTypeConstraint',
            rq: true,
            col: true,
            en: 'FeatureTypeConstraint',
            ti: '.FeatureTypeConstraint'
          }]
      }, {
        ln: 'AVERAGE',
        tn: null
      }, {
        ln: 'NamedLayer',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }, {
            n: 'layerFeatureConstraints',
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'namedStyleOrUserStyle',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedStyle',
                ti: '.NamedStyle'
              }, {
                en: 'UserStyle',
                ti: '.UserStyle'
              }],
            t: 'es'
          }]
      }, {
        ln: 'FeatureTypeStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'featureTypeName',
            en: 'FeatureTypeName'
          }, {
            n: 'semanticTypeIdentifier',
            mno: 0,
            col: true,
            en: 'SemanticTypeIdentifier'
          }, {
            n: 'transformation',
            en: 'Transformation',
            ti: '.Transformation'
          }, {
            n: 'rule',
            rq: true,
            col: true,
            en: 'Rule',
            ti: '.Rule'
          }, {
            n: 'vendorOption',
            mno: 0,
            col: true,
            en: 'VendorOption',
            ti: '.VendorOption'
          }]
      }, {
        ln: 'Transformation',
        tn: null,
        ps: [{
            n: 'function',
            rq: true,
            en: {
              lp: 'Function',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FunctionType'
          }]
      }, {
        ln: 'ExternalGraphic',
        tn: null,
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'format',
            rq: true,
            en: 'Format'
          }]
      }, {
        ln: 'LabelPlacement',
        tn: null,
        ps: [{
            n: 'pointPlacement',
            rq: true,
            en: 'PointPlacement',
            ti: '.PointPlacement'
          }, {
            n: 'linePlacement',
            rq: true,
            en: 'LinePlacement',
            ti: '.LinePlacement'
          }]
      }, {
        ln: 'ImageOutline',
        tn: null,
        ps: [{
            n: 'lineSymbolizer',
            rq: true,
            en: 'LineSymbolizer',
            ti: '.LineSymbolizer'
          }, {
            n: 'polygonSymbolizer',
            rq: true,
            en: 'PolygonSymbolizer',
            ti: '.PolygonSymbolizer'
          }]
      }, {
        ln: 'ColorMap',
        tn: null,
        ps: [{
            n: 'colorMapEntry',
            mno: 0,
            col: true,
            en: 'ColorMapEntry',
            ti: '.ColorMapEntry'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'extended',
            ti: 'Boolean',
            an: {
              lp: 'extended'
            },
            t: 'a'
          }]
      }, {
        ln: 'Geometry',
        tn: null,
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            en: {
              lp: 'expression',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'OverlapBehavior',
        tn: null,
        ps: [{
            n: 'latestontop',
            rq: true,
            en: 'LATEST_ON_TOP',
            ti: '.LATESTONTOP'
          }, {
            n: 'earliestontop',
            rq: true,
            en: 'EARLIEST_ON_TOP',
            ti: '.EARLIESTONTOP'
          }, {
            n: 'average',
            rq: true,
            en: 'AVERAGE',
            ti: '.AVERAGE'
          }, {
            n: 'random',
            rq: true,
            en: 'RANDOM',
            ti: '.RANDOM'
          }]
      }, {
        ln: 'GraphicStroke',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'Rule',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'legendGraphic',
            en: 'LegendGraphic',
            ti: '.LegendGraphic'
          }, {
            n: 'filter',
            rq: true,
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FilterType'
          }, {
            n: 'elseFilter',
            rq: true,
            en: 'ElseFilter',
            ti: '.ElseFilter'
          }, {
            n: 'minScaleDenominator',
            en: 'MinScaleDenominator',
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: 'MaxScaleDenominator',
            ti: 'Double'
          }, {
            n: 'symbolizer',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: 'Symbolizer',
            ti: '.SymbolizerType',
            t: 'er'
          }]
      }, {
        ln: 'Stroke',
        tn: null,
        ps: [{
            n: 'graphicFill',
            rq: true,
            en: 'GraphicFill',
            ti: '.GraphicFill'
          }, {
            n: 'graphicStroke',
            rq: true,
            en: 'GraphicStroke',
            ti: '.GraphicStroke'
          }, {
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'ChannelSelection',
        tn: null,
        ps: [{
            n: 'redChannel',
            rq: true,
            en: 'RedChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'greenChannel',
            rq: true,
            en: 'GreenChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'blueChannel',
            rq: true,
            en: 'BlueChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'grayChannel',
            rq: true,
            en: 'GrayChannel',
            ti: '.SelectedChannelType'
          }]
      }, {
        ln: 'InlineFeature',
        tn: null,
        ps: [{
            n: 'any',
            mno: 0,
            col: true,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'ShadedRelief',
        tn: null,
        ps: [{
            n: 'brightnessOnly',
            en: 'BrightnessOnly',
            ti: 'Boolean'
          }, {
            n: 'reliefFactor',
            en: 'ReliefFactor',
            ti: 'Double'
          }]
      }, {
        ln: 'EARLIESTONTOP',
        tn: null
      }, {
        ln: 'LineSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'ColorMapEntry',
        tn: null,
        ps: [{
            n: 'color',
            rq: true,
            an: {
              lp: 'color'
            },
            t: 'a'
          }, {
            n: 'opacity',
            ti: 'Double',
            an: {
              lp: 'opacity'
            },
            t: 'a'
          }, {
            n: 'quantity',
            ti: 'Double',
            an: {
              lp: 'quantity'
            },
            t: 'a'
          }, {
            n: 'label',
            an: {
              lp: 'label'
            },
            t: 'a'
          }]
      }, {
        ln: 'UserStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'isDefault',
            en: 'IsDefault'
          }, {
            n: 'featureTypeStyle',
            rq: true,
            col: true,
            en: 'FeatureTypeStyle',
            ti: '.FeatureTypeStyle'
          }]
      }, {
        ln: 'Extent',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }, {
            n: 'value',
            rq: true,
            en: 'Value'
          }]
      }, {
        ln: 'Displacement',
        tn: null,
        ps: [{
            n: 'displacementX',
            rq: true,
            en: 'DisplacementX',
            ti: '.ParameterValueType'
          }, {
            n: 'displacementY',
            rq: true,
            en: 'DisplacementY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'ParameterValueType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'expression',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'Normalize',
        tn: null
      }, {
        ln: 'GraphicFill',
        tn: null,
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'PointPlacement',
        tn: null,
        ps: [{
            n: 'anchorPoint',
            en: 'AnchorPoint',
            ti: '.AnchorPoint'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.Displacement'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'RANDOM',
        tn: null
      }, {
        ln: 'SelectedChannelType',
        ps: [{
            n: 'sourceChannelName',
            rq: true,
            en: 'SourceChannelName'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancement'
          }]
      }, {
        ln: 'PointSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'graphic',
            en: 'Graphic',
            ti: '.Graphic'
          }]
      }, {
        ln: 'FeatureTypeConstraint',
        tn: null,
        ps: [{
            n: 'featureTypeName',
            en: 'FeatureTypeName'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.FilterType'
          }, {
            n: 'extent',
            mno: 0,
            col: true,
            en: 'Extent',
            ti: '.Extent'
          }]
      }, {
        ln: 'TextSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'label',
            en: 'Label',
            ti: '.ParameterValueType'
          }, {
            n: 'font',
            en: 'Font',
            ti: '.Font'
          }, {
            n: 'labelPlacement',
            en: 'LabelPlacement',
            ti: '.LabelPlacement'
          }, {
            n: 'halo',
            en: 'Halo',
            ti: '.Halo'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }, {
            n: 'graphic',
            en: 'Graphic',
            ti: '.Graphic'
          }, {
            n: 'priority',
            en: 'Priority',
            ti: '.ParameterValueType'
          }, {
            n: 'vendorOption',
            mno: 0,
            col: true,
            en: 'VendorOption',
            ti: '.VendorOption'
          }]
      }, {
        ln: 'Fill',
        tn: null,
        ps: [{
            n: 'graphicFill',
            en: 'GraphicFill',
            ti: '.GraphicFill'
          }, {
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'Halo',
        tn: null,
        ps: [{
            n: 'radius',
            en: 'Radius',
            ti: '.ParameterValueType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }]
      }, {
        ln: 'LATESTONTOP',
        tn: null
      }, {
        ln: 'Font',
        tn: null,
        ps: [{
            n: 'cssParameter',
            mno: 0,
            col: true,
            en: 'CssParameter',
            ti: '.CssParameter'
          }]
      }, {
        ln: 'ContrastEnhancement',
        tn: null,
        ps: [{
            n: 'normalize',
            rq: true,
            en: 'Normalize',
            ti: '.Normalize'
          }, {
            n: 'histogram',
            rq: true,
            en: 'Histogram',
            ti: '.Histogram'
          }, {
            n: 'gammaValue',
            en: 'GammaValue',
            ti: 'Double'
          }]
      }, {
        ln: 'LinePlacement',
        tn: null,
        ps: [{
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'Mark',
        tn: null,
        ps: [{
            n: 'wellKnownName',
            en: 'WellKnownName',
            ti: '.WellKnownName'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.Fill'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.Stroke'
          }]
      }, {
        ln: 'WellKnownName',
        tn: null,
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'expression',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_0_0.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'CssParameter',
        tn: null,
        bti: '.ParameterValueType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'RasterSymbolizer',
        tn: null,
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.Geometry'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'channelSelection',
            en: 'ChannelSelection',
            ti: '.ChannelSelection'
          }, {
            n: 'overlapBehavior',
            en: 'OverlapBehavior',
            ti: '.OverlapBehavior'
          }, {
            n: 'colorMap',
            en: 'ColorMap',
            ti: '.ColorMap'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancement'
          }, {
            n: 'shadedRelief',
            en: 'ShadedRelief',
            ti: '.ShadedRelief'
          }, {
            n: 'imageOutline',
            en: 'ImageOutline',
            ti: '.ImageOutline'
          }]
      }, {
        ln: 'AnchorPoint',
        tn: null,
        ps: [{
            n: 'anchorPointX',
            rq: true,
            en: 'AnchorPointX',
            ti: '.ParameterValueType'
          }, {
            n: 'anchorPointY',
            rq: true,
            en: 'AnchorPointY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'NamedStyle',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: 'Name'
          }]
      }],
    eis: [{
        en: 'NamedStyle',
        ti: '.NamedStyle'
      }, {
        en: 'Histogram',
        ti: '.Histogram'
      }, {
        en: 'ElseFilter',
        ti: '.ElseFilter'
      }, {
        en: 'BrightnessOnly',
        ti: 'Boolean'
      }, {
        en: 'CssParameter',
        ti: '.CssParameter'
      }, {
        en: 'TextSymbolizer',
        ti: '.TextSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'Extent',
        ti: '.Extent'
      }, {
        en: 'ReliefFactor',
        ti: 'Double'
      }, {
        en: 'Normalize',
        ti: '.Normalize'
      }, {
        en: 'GammaValue',
        ti: 'Double'
      }, {
        en: 'Label',
        ti: '.ParameterValueType'
      }, {
        en: 'Rotation',
        ti: '.ParameterValueType'
      }, {
        en: 'ColorMapEntry',
        ti: '.ColorMapEntry'
      }, {
        en: 'Font',
        ti: '.Font'
      }, {
        en: 'ContrastEnhancement',
        ti: '.ContrastEnhancement'
      }, {
        en: 'ImageOutline',
        ti: '.ImageOutline'
      }, {
        en: 'AnchorPointY',
        ti: '.ParameterValueType'
      }, {
        en: 'FeatureTypeName'
      }, {
        en: 'IsDefault'
      }, {
        en: 'Mark',
        ti: '.Mark'
      }, {
        en: 'LinePlacement',
        ti: '.LinePlacement'
      }, {
        en: 'VendorOption',
        ti: '.VendorOption'
      }, {
        en: 'GrayChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'ExternalGraphic',
        ti: '.ExternalGraphic'
      }, {
        en: 'SourceChannelName'
      }, {
        en: 'RemoteOWS',
        ti: '.RemoteOWS'
      }, {
        en: 'Symbolizer',
        ti: '.SymbolizerType'
      }, {
        en: 'MinScaleDenominator',
        ti: 'Double'
      }, {
        en: 'LayerFeatureConstraints',
        ti: '.LayerFeatureConstraints'
      }, {
        en: 'GraphicStroke',
        ti: '.GraphicStroke'
      }, {
        en: 'PointPlacement',
        ti: '.PointPlacement'
      }, {
        en: 'Title'
      }, {
        en: 'FeatureTypeStyle',
        ti: '.FeatureTypeStyle'
      }, {
        en: 'NamedLayer',
        ti: '.NamedLayer'
      }, {
        en: 'BlueChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'StyledLayerDescriptor',
        ti: '.StyledLayerDescriptor'
      }, {
        en: 'RANDOM',
        ti: '.RANDOM'
      }, {
        en: 'OnlineResource',
        ti: '.OnlineResource'
      }, {
        en: 'Size',
        ti: '.ParameterValueType'
      }, {
        en: 'Format'
      }, {
        en: 'Graphic',
        ti: '.Graphic'
      }, {
        en: 'Rule',
        ti: '.Rule'
      }, {
        en: 'LabelPlacement',
        ti: '.LabelPlacement'
      }, {
        en: 'DisplacementY',
        ti: '.ParameterValueType'
      }, {
        en: 'EARLIEST_ON_TOP',
        ti: '.EARLIESTONTOP'
      }, {
        en: 'DisplacementX',
        ti: '.ParameterValueType'
      }, {
        en: 'Fill',
        ti: '.Fill'
      }, {
        en: 'LineSymbolizer',
        ti: '.LineSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'GreenChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'UserStyle',
        ti: '.UserStyle'
      }, {
        en: 'InlineFeature',
        ti: '.InlineFeature'
      }, {
        en: 'OverlapBehavior',
        ti: '.OverlapBehavior'
      }, {
        en: 'Priority',
        ti: '.ParameterValueType'
      }, {
        en: 'GraphicFill',
        ti: '.GraphicFill'
      }, {
        en: 'Value'
      }, {
        en: 'ChannelSelection',
        ti: '.ChannelSelection'
      }, {
        en: 'AVERAGE',
        ti: '.AVERAGE'
      }, {
        en: 'Name'
      }, {
        en: 'PerpendicularOffset',
        ti: '.ParameterValueType'
      }, {
        en: 'LegendGraphic',
        ti: '.LegendGraphic'
      }, {
        en: 'ShadedRelief',
        ti: '.ShadedRelief'
      }, {
        en: 'Radius',
        ti: '.ParameterValueType'
      }, {
        en: 'AnchorPointX',
        ti: '.ParameterValueType'
      }, {
        en: 'Stroke',
        ti: '.Stroke'
      }, {
        en: 'SemanticTypeIdentifier'
      }, {
        en: 'RedChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Transformation',
        ti: '.Transformation'
      }, {
        en: 'RasterSymbolizer',
        ti: '.RasterSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'LATEST_ON_TOP',
        ti: '.LATESTONTOP'
      }, {
        en: 'PointSymbolizer',
        ti: '.PointSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'MaxScaleDenominator',
        ti: 'Double'
      }, {
        en: 'Displacement',
        ti: '.Displacement'
      }, {
        en: 'Halo',
        ti: '.Halo'
      }, {
        en: 'Service'
      }, {
        en: 'UserLayer',
        ti: '.UserLayer'
      }, {
        en: 'Geometry',
        ti: '.Geometry'
      }, {
        en: 'Abstract'
      }, {
        en: 'PolygonSymbolizer',
        ti: '.PolygonSymbolizer',
        sh: 'Symbolizer'
      }, {
        en: 'WellKnownName',
        ti: '.WellKnownName'
      }, {
        en: 'Opacity',
        ti: '.ParameterValueType'
      }, {
        en: 'ColorMap',
        ti: '.ColorMap'
      }, {
        en: 'FeatureTypeConstraint',
        ti: '.FeatureTypeConstraint'
      }, {
        en: 'AnchorPoint',
        ti: '.AnchorPoint'
      }]
  };
  return {
    SLD_1_0_0: SLD_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SLD_1_0_0_GeoServer_Module_Factory);
}
else {
  var SLD_1_0_0_GeoServer_Module = SLD_1_0_0_GeoServer_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SLD_1_0_0 = SLD_1_0_0_GeoServer_Module.SLD_1_0_0;
  }
  else {
    var SLD_1_0_0 = SLD_1_0_0_GeoServer_Module.SLD_1_0_0;
  }
}
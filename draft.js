/* written in javascript format for simplicity and comments */

[
{
  "@type": "Header",
  "@id": "",
},

{
  "@type": ["DataSource", "NiftiDataSource"],
  "@id": "dataSource1",
  "mimeType": "application/x-nifti",
  "src": "file:datafile.nii"
},

{
  "@type": "Segment",
  "@id": "segment1",
  "annotation": {
    
  },
  "representation": "scalarValueRep1",
  "alternateRepresentation": ["geometryRep2"],
},


/* types of segment representations:
  * Volumetric:
    * ScalarValue
    * BitValue     - same as ScalarValue but for a bit mask, value=1
    * Probability
    * FractionalValue
  * Geometric:
    * PolygonalSurface
    * PlanarContour
*/
{
  "@type": ["SegmentRep", "ScalarValueSegmentRep"],
  "@id": "labelValueRep1",
  "scalarValue": 10,
  "dataSource": "dataSource1"
},

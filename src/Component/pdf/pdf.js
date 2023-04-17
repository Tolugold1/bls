import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "black",
    fontFamily: 'Times-Roman'
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header_section: {
    paddingLeft: 10,
    color: 'blue',
    marginLeft: 10,
  },
  headerView: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 0,
    paddingRight: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  text_h4: {
    fontSize: '25px',
    fontWeight: 1000,
  },
  viewBlock: {
    display: 'block',
    margin: 10
  },
  
  text_h5: {
    fontSize: '10px',
    letterSpacing: '.5px',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  text_h2: {
    fontSize: '20px',
    fontStyle: 'italic',
    fontWeight: 900,
  },
  viewer: {
    width: "100vw", //the pdf viewer will take up all of the width and height
    height: '200vh',
  },
  linkStyle: {
    marginTop: 0,
    marginLeft: 2,
    fontSize: '10px',
    marginRight: 0
  },
  linkBody: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

// Create Document Component
function MyDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <view style={styles.viewBlock}>
            <view style={styles.headerView}>
              <view>
                <Text style={styles.text_h4}>Adeleke Tolulope Stephen</Text>
              </view>
              <view>
                <Text  style={styles.text_h5}>Lagos, Nigeria</Text>
              </view>
            </view>
            <view style={styles.linkBody}><Link src='https://tolugold.netlify.app' style={styles.linkStyle}>Portfolio</Link><Text>|</Text><Link src='mailto:toluadelekesteve@gmail.com' style={styles.linkStyle}>Email: toluadelekesteve@gmail.com</Link><Text>|</Text><Link src='https://tolugold.netlify.app' style={styles.linkStyle}>Portfolio</Link></view>
          </view>
          <view style={styles.header_section}><Text style={styles.text_h2}>Full-Stack Developer</Text></view>
          <View style={styles.section}>
            <Text>I am a web developer with adequate knowledge of HTML, CSS, JavaScript, and Nodejs. I also have knowledge of popular frameworks such as React and experience with REST APIs and MongoDB database.</Text>
          </View>
          <View style={styles.section}>
            <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default MyDocument;
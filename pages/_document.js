import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap" rel="stylesheet" />
                    <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700;&display=swap" rel="stylesheet" />
                    <script src="https://kit.fontawesome.com/100f05b54f.js" crossOrigin="anonymous"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
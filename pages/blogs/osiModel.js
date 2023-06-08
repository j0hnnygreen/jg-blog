import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BlogCard, { CardTerminal } from "../../components/blogs/blog/blogCards";
import Layout, { pageTitles } from "../../components/layout";
import blogStyles from "../../styles/Blog.module.css";

export default function OSIModel() {
  return (
    <div className="container">
      <Layout>
        <Head>
          <title>{pageTitles.networking.osimodel}</title>
        </Head>

        <main className="main">
          <h1 className={blogStyles.title}>OSI Model</h1>
          <p></p>

          <BlogCard heading="What is OSI Model?">
            <p>
              The <b>Open Systems Interconnection Model</b> is a hypothetical
              model that was developed by the{" "}
              <b>International Organization for Standardization (ISO)</b> which
              enables diverse communication systems to communicate using
              standard <em>protocols</em>.
            </p>
            <p>
              The OSI model is not used in the real world rather used to for
              troubleshooting network problems.
            </p>
          </BlogCard>

          <BlogCard heading="Layers of OSI Model">
            <div className={blogStyles.blogImgs}>
              <pre>
                <Image
                  className={blogStyles.centerImg}
                  src="/assets/blogs/networking/osimodel/osi_model.svg"
                  alt="OSI Model"
                  width={600}
                  height={600}
                />
              </pre>
            </div>
            <ol reversed>
              <h3>
                <li>Application Layer</li>
              </h3>
              <p>
                Layer 7 is called the <em>Application Layer</em>. This layer
                integrates the services on the network with operating system and
                allows users to gain access to the network. The end-user can
                interact with this layer by using web browsers, social media
                platforms etc. Application Layer&apos;s basic job is to provide
                an interface between the user and the network. This layer does
                not refer to the application itself, but it provides all the
                needed services to support applications to run properly.
              </p>
              <p>
                <i>Protocols</i> used in the Application Layer are:{" "}
                <em>
                  File Transfer Protocol (FTP), Simple Mail Transfer Protocol
                  (SMTP), Internet Message Access Protocol (IMAP), Hypertext
                  Transfer Protocol (HTTP), Post Office Protocol (POP), Trivial
                  File Transfer Protocol (TFTP), Simple Network Management
                  Protocol (SNMP), and Network News Transfer Protocol (NNTP)
                </em>
              </p>
              <h3>
                <li>Presentation Layer</li>
              </h3>
              <p>
                Layer 6 is called the <em>Presentation Layer</em>. This layer is
                responsible for translation, encryption, and compression of
                data. Presentation Layer makes information presentable for the
                application or network.
              </p>
              <p>
                <i>Protocols</i> used in Presentation Layer are:{" "}
                <em>
                  Secure Sockets Layer (SSL) and Transport Layer Security (TLS)
                </em>
              </p>
              <h3>
                <li>Session Layer</li>
              </h3>
              <p>
                Layer 5 is called <em>Session Layer</em>. This layer is
                responsible for creating sessions between device communication
                by opening and closing a session between the two devices that
                are communicating.
              </p>
              <p>
                The functions of this layer involves establishing, maintaining
                and synchronization between the applications at each end of the
                sessions.
              </p>
              <p>
                <i>Protocols</i> used in Session Layer are:{" "}
                <em>
                  ADSP, ASP, H.245, ISO-SP, OSI session-layer protocol (X.225,
                  ISO 8327), iSNS, L2F, L2TP, NetBIOS, PAP, PPTP, RPC, RTCP,
                  SMPP, SCP, SOCKS, ZIP, and SDP
                </em>
              </p>
              <h3>
                <li>Transport Layer</li>
              </h3>
              <p>
                Layer 4 is called <em>Transport Layer</em>. This layer is
                responsible for the transmission of messages in the order in
                which they are sent without duplicating the data. This includes
                taking data from the session layer and breaking it up into
                chunks called segments before sending it to layer 3. The
                transport layer on the receiving device is responsible for
                reassembling the segments into data the session layer can
                consume.
              </p>
              <p>
                <i>Protocols</i> used in Session Layer are:{" "}
                <em>
                  Transmission Control Protocol (TCP) and User Datagram Protocol
                  (UDP)
                </em>
                . Segments are formed when data is transported over the TCP
                connection and the TCP protocol distributes the data into
                smaller units. The UDP protocol is considered unreliable due to
                the receiver not receiving an acknowledgment when the packet is
                received and the sender not waiting for an acknowledgment.
              </p>
              <p>
                Data transfer, dividing and reassembling, flow control, and
                error handling are the essential role and responsibility of the
                Transport Layer. Data transfer is simply transferring data
                between the sender and receiver accumulated from the Session
                Layer. To make communication quicker the data received from the
                Session Layer gets packaged into smaller segments on the sender
                device by dividing and reassembling.
              </p>
              <p>
                Once the receiver receives the segments it collects, all
                segments reassembles back to the original data to be presented
                to the Session Layer. Flow control is the responsibility of the
                Transport Layer, although it is performed end-to-end rather than
                across a single link. Lastly, error handling is also the
                responsibility of this Layer. The error control is useful to
                ensure full data delivery, as the data are divided into
                segments.
              </p>
              <h3>
                <li>Network Layer</li>
              </h3>
              <p>
                Layer 3 is called <em>Network Layer</em>. This layer is
                responsible for facilitating data transfer between two different
                networks. If the two devices communicating are on the same
                network, then the network layer is unnecessary. The Network
                Layer is also responsible for further breaking down the segments
                into small units called <i>packets</i>. The receiver side
                renovates packets back to segment. Assignment of internet
                protocol (IP) addresses is another important thing that happens
                on the Network Layer. <i>Routers</i> are used in the Network
                Layer.
              </p>
              <p>
                <i>Protocols</i> used in Network Layer are:{" "}
                <em>
                  IP, Internet Protocol version 4 (IPv4), Internet Protocol
                  version 6 (IPv6), Internet Protocol Security (IPSec), Internet
                  Control Message Protocol (ICMP), and Internet Group Management
                  Protocol (IGMP)
                </em>
              </p>
              <h3>
                <li>Data Link Layer</li>
              </h3>
              <p>
                Layer 2 is called <em>Data Link Layer</em>. This layer is
                responsible for data transfer between two devices on the same
                network. The Data link layer mainly consists of <i>switches</i>{" "}
                and <i>hubs</i> to connect the actual network for data exchange.
                The data link layer takes packets from the network layer and
                breaks them into smaller pieces called <i>frames</i>.
              </p>
              <p>
                The layer is split into two sub layers called Logical Link
                Control (LLC) and Media Access Control (MAC). The LLC is the top
                sublayer and provides the interfacing between the lower layers
                and upper layers. It&apos;s liable for transporting the packets
                to the Network Layer of the receiver collecting, identifies the
                Network Layer protocol address from the header, and provides
                flow control. The bottom layer is the MAC sublayer and it is
                responsible for identifying how devices can access the physical
                medium and it is used for transferring the packets over the
                network.
              </p>
              <p>
                <i>Protocols</i> used in Data Link Layer are:{" "}
                <em>PPP, ATM, Ethernet</em>
              </p>
              <h3>
                <li>Physical Layer</li>
              </h3>
              <p>
                Layer 1 is called <em>Physical Layer</em> as it provides the
                actual connection between two devices using cables. In this
                layer the data gets converted into a bit stream from the Data
                Link layer (Layer 2) into <i>electrical signals</i>.
              </p>
              <p>
                <i>Protocols</i> used in Physical Layer are:{" "}
                <em>USB, Bluetooth, etc.</em>
              </p>
            </ol>
          </BlogCard>

          <BlogCard heading="How data flows through the OSI Model?">
            <p>
              If Joe wanted to send an email to Ron, he&apos;ll compose the
              email on gmail and click send. Gmail will pass the email message
              to the Application Layer, which will select a protocol and pass
              the data to the Presentation Layer. The Presentation Layer will
              encrypt depending upon the security level and condense the data.
              It will move to the Session Layer next, which will initialize the
              communication session by opening the session to ensure the quality
              delivery of the data. The data then goes to the sender&apos;s
              Transportation Layer. Here is where the data will be divided into
              small segments. Those segments will then hit the network layer and
              will be broken up into packets. These packets will break down into
              frames at the Data Link Layer. The Data Link Layer will then send
              those frames to the Physical Layer. Here, the data will be
              converted into a bit stream of 1s and 0s and sent through the
              network.
            </p>
            <p>
              On the other end, on Ron&apos;s computer, it will first capture
              the bit stream at the Physical Layer and wait until every bit
              stream transforms into frames to go to the Data Link Layer. If
              there are any errors in the Physical Layer, they will be trapped
              in the Data Link Layer, which is now liable to take all frames and
              reunite them into packets. From the Data Link Layer, it will go to
              the Network Layer, to generate segments from the given packets. It
              will then flow into the Transport Layer where the original data
              will be formed from segments through the reassembly function.
              After the initial data are formed, it will move to the Session
              Layer. Here in this layer, the session will terminate once the
              data is received completely and move into the next layer called
              the Presentation Layer. The Presentation Layer will now decrypt
              the data that is consumed for the application. Finally comes the
              Application Layer from where the application will be able to
              function and display the email sent to Ron&apos;s computer screen
              using the Application Layer&apos;s services.
            </p>
          </BlogCard>
        </main>
      </Layout>
    </div>
  );
}

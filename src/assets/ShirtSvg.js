import "../styles/ShirtSvg.css"

const ShirtSvg = ({fill, width, height}) => {

    return (
        <svg id="shirt-outline" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 626.6 662" style={{width: width, height: height}}>
            <g id="Layer_3" data-name="Layer 3">
                <path className="cls-1" fill={fill}
                      d="M294.17,7.22c-3.69.13-6.19,4.1-9.46,5.81-1.7.89-3.48,1.62-5.17,2.52-1.16.62-2.14,1.51-3.28,2.16-1.05.6-2.11,1.16-3.23,1.62-4.44,1.81-8.64,4.2-13.08,6.04-1.07.44-2.17.74-3.28,1.08s-2.16.93-3.27,1.4c-1.5.62-3.08,1.1-4.66,1.47-2.22.52-4.19,1.7-6.35,2.42s-4.19,1.25-6.24,2.06c-1.81.72-3.64,1.41-5.45,2.13-1.72.68-3.45,1.22-5.2,1.77-2.39.76-4.54,2.01-7.01,2.59-1.47.35-2.96.61-4.35,1.24-1.25.56-2.43,1.07-3.77,1.42-3,.78-5.92,1.79-8.89,2.7-2.37.73-4.63,1.54-7.05,2.11-1.12.27-2.34.45-3.4.92s-1.98.98-3.13,1.22c-1.72.37-3.46.34-5.14.95-1.79.65-3.59.83-5.42,1.34-2.09.58-3.99,1.35-6.17,1.66-2.46.35-4.63,1.48-6.99,2.14s-4.89,1.64-7.37,2.3c-.98.26-1.94.49-2.88.89-1.28.54-2.41,1.38-3.7,1.9-2.18.89-4.08,1.64-5.96,3.1-1.61,1.25-3.3,2.07-5.03,3.13-2.97,1.82-4.83,4.91-7.37,7.22-1.44,1.31-3.29,2.12-4.76,3.41-1.57,1.37-2.78,3.25-4.28,4.72-1.61,1.58-3.25,3.08-4.9,4.61-.59.55-1.19,1.12-1.7,1.76-.66.84-1.01,1.84-1.68,2.66-1.12,1.39-2.35,2.66-3.55,3.98-1.59,1.76-3.67,3.2-4.88,5.26-1.63,2.79-2.87,5.68-4.15,8.63-.56,1.28-1.11,2.61-1.57,3.92-.52,1.5-.76,3.03-1.21,4.52-.87,2.87-1.6,5.78-2.48,8.66-.7,2.3-1.57,4.52-2.24,6.81-.57,1.93-.85,4.02-1.17,6-.19,1.2-.39,2.37-.47,3.58-.04.67.44,1.09.67,2.18.92,4.4-2.12,8.5-2.38,12.97-.05.9-.15,1.8-.18,2.7-.05,1.35.21,2.7.22,4.06.02,2.32-.14,4.68-.27,7-.16,2.78-.93,5.52-1.57,8.22-1.26,5.32-2.92,10.52-4.53,15.74s-2.35,11.24-3.41,16.85c-.97,5.13-2.82,10.05-4.28,15.04-1.09,3.72-1.9,7.44-3.93,10.81-1.47,2.44-2.32,5.25-3.59,7.8-.39.78-1.01,1.54-1.25,2.39-.15.55,0,.9.16,1.41.47,1.43,1.33,2.75,2.26,3.93,1,1.26,2.03,2.73,3.32,3.69s3.03,1.65,4.52,2.35c1.9.9,3.91,1.52,5.95,1.99,3.78.86,7.41,2.24,11.18,3.11s7.45,1.83,11.11,2.88,7.51,3.14,11,4.09c2.64.72,5.66,1.08,8.39,1.29,1.83.14,3.4,1,5.24,1.02,3.49.03,8.21-.45,11.69-.13,2.78.25,3.79-.72,6.59-.69,3.2.04,6.13-.94,9.27-1.17,1.24-.09,2.38-.2,3.45-.86.52-.32,1.02-.7,1.54-1.02,1.57-.95,3.51-1.29,5.23-1.86,3.16-1.05,6.28-2.72,9.01-4.62,1.3-.91,2.74-1.86,3.87-2.94.45-.44,1.4-1.14,1.56-1.87.01-.05.11-1.14,1.11-.53,4.17,2.54,1.08,9.72,1.49,14.58.14,1.64.47,3.25.54,4.9s.03,3.17.15,4.73c.27,3.43,1.33,6.79,1.74,10.21.18,1.51.49,3,.59,4.52.16,2.29.01,4.56.34,6.84,1.01,6.99-2.2,9.65-.43,18.42.65,3.23-.8,6.78-.07,11.77.77,5.26-.42,8.25.52,14.75.43,2.92-.01,5.38-.34,8.77-.29,3.06-.47,3.31-.19,7.21.3,4.17-.66,4.99-.39,7.55.3,2.86,1.82,9.83,1.77,12.71-.1,5.3-2.11,9.55-1.84,14.86s2.36,7.18,1.89,12.24c-.44,4.67-1.4,7.95-1.17,12.65.28,5.78-1.25,13.55.4,18.84.53,1.7.57,3.54.3,5.31s-1.38,4.44-1.25,6.14c.25,3.37.27,5.75.51,9.13.14,1.99.16,2.93.06,4.93s.94,5.49.75,7.47c-.56,5.76-2.89,10.83-.58,16.74,1.05,2.68,1.35,6.3,1.21,9.18-.12,2.63.58,4.69.37,7.31-.3,3.73-.56,7.56-.38,11.3.08,1.62.44,3.14.36,4.77-.09,2,.11,3.96.17,5.96.11,3.89-.36,8.07-1.04,11.89s-.99,7.36-1.55,11.02c-.13.85-.33,1.71-.39,2.58-.04.64-1.01,1.44-.83,2.68.63,4.33,7.57,4.72,11.57,6.57,2.24,1.03,4.59,1.76,6.86,2.7,1.79.74,3.48,1.55,5.2,2.4,1.93.96,4.04,1.57,6.06,2.31,1.4.51,2.86.88,4.24,1.44,1.46.6,2.89,1.36,4.33,2.02,1.34.61,2.62,1.14,4.03,1.54,1.96.55,3.87,1.32,5.83,1.82,3.58.92,7.04,2.18,10.59,3.22,2.11.62,4.3.98,6.44,1.5,1.84.45,3.61,1.04,5.42,1.6,3.87,1.19,7.74,2.35,11.73,3.02,1.95.32,3.92.46,5.87.77,2.55.4,5.06,1,7.6,1.47,2.97.55,5.99.78,8.96,1.32,3.89.71,7.79,1.41,11.7,2.03,2.9.46,5.84.6,8.76.83,4.1.32,8.21.59,12.33.65,12.46.18,24.85-.36,37.28-1.15,4.98-.31,9.99-.45,14.9-1.41,3.53-.69,7.19-1.08,10.71-1.36,1.55-.12,3.06-.69,4.61-.79.53-.03,1.04-.1,1.56-.21,1.23-.26,2.39-.81,3.63-1,2.61-.4,5.19-.75,7.7-1.58,1.27-.42,2.56-.6,3.89-.69,1.73-.12,3.3-.65,4.97-1.08s3.21-.63,4.8-.99c1.92-.43,3.69-1.36,5.63-1.68s3.88-.59,5.79-1.26c1.02-.35,1.98-.86,3.03-1.14,1.65-.44,3.37-.48,5.01-.98,1.14-.34,2.21-.83,3.37-1.11,1.09-.26,2.18-.51,3.28-.74,2.06-.43,3.88-1.35,5.86-1.99,2.1-.67,4.29-.99,6.38-1.65.99-.31,1.9-.81,2.89-1.1,1.2-.35,2.44-.57,3.65-.88,1.43-.37,2.93-.67,4.29-1.25,1.01-.43,1.98-.86,3.06-1.11,1.3-.31,2.58-.7,3.85-1.13,1.62-.55,3.1-1.38,4.66-2.07,4.87-2.17,9.39-5.04,13.37-8.59,1.35-1.21,3.76-1.63,4.67-3.88,3.08-7.57-.44-16.3-1.01-24.45-.27-3.8-.44-7.62-.61-11.43-.19-4.17-.47-8.42-.15-12.59,1.07-13.79-.84-27.63-.2-41.43.12-2.66-.11-5.32-.01-7.98s.2-5.38.2-8.1c.01-7.3-.68-14.59-.52-21.9.15-6.61-.02-13.24.06-19.85.08-6.09-.31-12.32-.83-18.4-.25-2.96-.02-5.93-.18-8.89-.14-2.63-.28-5.27-.38-7.9-.16-4.11.05-8.34.3-12.44.28-4.54-.34-8.92-.55-13.45-.25-5.44-.85-10.87-1.05-16.31-.19-5.31.18-10.59.76-15.85.43-3.91,1.12-7.81,1.05-11.76-.12-6.49-.07-13.3,1.43-19.64.43-1.8.66-3.66.95-5.49.33-2.07.16-4.18.5-6.25.29-1.73.45-3.43.9-5.14.34-1.29,1.1-2.31,1.41-3.6.29-1.16.4-2.28.96-3.35.36-.68.81-1.25,1.22-1.89.68-1.05,1.15-3.17,2.2-3.19,3.84-.1,5.11,6.21,8.81,7.7,2.99,1.2,5.76,2.82,8.66,4.22,2.37,1.14,4.77,2.09,7.28,2.83,3.08.91,6.33,1.38,9.47,2.03s6.49.62,9.69.79,6.1.32,9.15.38c2.3.04,4.33-.5,6.6-.75,1.2-.13,2.42-.19,3.62-.32.7-.07,1.95-.93,2.54-1.66,1.39-1.72,4.44-.48,6.55-1.17.91-.29,1.77-.7,2.7-.94,1.6-.42,3.2-.86,4.81-1.24,1.45-.34,2.85-.93,4.29-1.34,1.17-.34,2.36-.63,3.52-1.01,1.48-.48,2.81-1.2,4.19-1.9,1.78-.91,3.63-1.67,5.43-2.54,2.75-1.32,5.39-2.83,7.86-4.63,1.72-1.25,3.32-2.68,5.07-3.89,1.16-.81,2.26-1.76,3.47-2.49.43-.26,1.19-.32,1.29-.97.64-4.14-3.72-7.68-5.91-11.26-1.08-1.76-1.79-3.63-2.64-5.5-1.45-3.17-2.07-6.58-3-9.94-.82-2.97-1.86-5.92-2.92-8.82-.7-1.92-1.32-3.88-2.2-5.72-1.66-3.48-2.7-7.3-3.85-10.96-.87-2.76-1.42-5.54-2.04-8.35-.89-3.99-1.36-8.08-1.93-12.13-.34-2.44-.85-4.87-1.2-7.31-.85-5.81-.98-11.71-1.83-17.53-.51-3.55-1.03-7.09-1.54-10.64-.24-1.68-.5-3.33-.87-4.99-.4-1.81-.57-3.68-1.24-5.41-1.02-2.6-1.78-5.31-2.9-7.88-1.23-2.82-2.66-5.53-3.84-8.37-1.35-3.24-2.5-6.57-3.99-9.75-.55-1.17-1.2-2.28-1.89-3.37-.91-1.44-1.58-3.01-2.48-4.45-1.71-2.76-2.84-5.79-4.74-8.44-1.55-2.17-3.34-4.12-4.87-6.3-1.99-2.83-4.77-4.84-7.11-7.34-2.06-2.2-4.79-3.65-7.15-5.52-1.11-.88-2.49-1.7-3.76-2.29-1.48-.69-2.91-1.48-4.41-2.12-1.36-.58-2.78-.74-4.14-1.28-.67-.27-1.23-.71-1.88-1.03-.82-.41-1.73-.66-2.6-.93-1.35-.41-2.63-1-3.88-1.65s-2.45-1.05-3.66-1.64c-1.3-.64-2.33-1.71-3.75-2.12-2.76-.8-5.36-2.06-8.08-2.99-1.69-.57-3.32-1.23-5-1.78-1.88-.62-3.84-1.21-5.65-2-1.21-.53-2.48-.81-3.75-1.17s-2.35-1-3.72-1.25c-1.05-.2-2.15-.31-3.16-.64-.8-.26-1.57-.61-2.39-.83-1.58-.41-3.19-.56-4.74-1.09-.89-.3-1.59-.58-2.53-.67-.79-.08-1.62-.27-2.4-.41-.69-.12-1.3-.43-1.94-.69-.88-.35-1.8-.44-2.73-.62-1.5-.29-2.63-1.02-4.01-1.56-1.52-.59-3.27-.42-4.81-.97-1.34-.48-2.74-.72-4.08-1.17-1.1-.37-2.27-.67-3.3-1.18-1.55-.76-3.21-.84-4.87-1.19s-3.07-.93-4.7-1.13c-1.49-.18-2.8-.79-4.24-1.13-.73-.17-1.47-.25-2.19-.41-.34-.08-.38.08-.94-.08-2.81-.83-9.85-6-15.38-7.65-2.11-.63-3.88-2.13-5.8-3.22-2.25-1.28-4.54-2.68-6.91-3.72-1.97-.86-3.94-1.79-5.82-2.84-2.14-1.2-4.41-2.1-6.67-3.05-3.11-1.3-6.29-2.9-9.14-4.73-.66-.42-1.35-.73-2.01-1.13-.35-.21-.64-.47-1.05-.54-.75-.14-1.3.38-1.91.74-1.82,1.08-3.96,1.72-6.01,2.11-1.33.26-2.39.99-3.62,1.51-.68.29-1.43.46-2.15.65-1.27.32-2.45.92-3.69,1.34s-2.58.53-3.81.99c-1.42.53-2.79,1.14-4.24,1.58-1.59.48-3.25,1.05-4.88,1.35-1.33.24-2.66.29-3.98.65s-2.54.69-3.85.93c-2.82.53-5.62,1.02-8.48,1.28-1.58.14-3.18-.06-4.77,0-1.43.05-2.77.17-4.2-.06-2.78-.44-5.56-.75-8.36-1.1-4.03-.5-8-1.76-11.97-2.64-4.72-1.05-9-3.09-13.41-4.98-2.11-.9-3.6-3.29-5.57-3.22Z"/>
                <path className="cls-2"
                      d="M461.81,206.5c.22,20.16.43,40.33.65,60.49.13,12.07-6.52,24-16.87,30.23s-24,6.53-34.61.77c-10.61-5.76-17.79-17.38-18.28-29.45,0-20.58-.02-41.17-.09-61.75l.03-.06"/>
                <path className="cls-2" d="M0,488.74l.71-4.23"/>
                <path className="cls-2"
                      d="M117.62,257.73c6.18-36.99,12.35-73.97,18.53-110.96,5.04-30.33,32.94-56.45,65.72-61.13,45.58-6.51,88.97-25.74,124-54.43-9.57-1.55-19.14-3.1-30.26-3.99-32.97,22.56-71.37,38.21-111.53,45.45-29.94,5.4-55.49,28.04-63.99,55.93-12.93,39.78-20.52,81.07-23.55,122.34,6.06,3.88,13.23,6.24,21.08,6.78Z"/>
                <path className="cls-2"
                      d="M503.53,93.99c33.61,6.66,40.67,30.33,53.06,62.28,12.39,31.94,13.74,66.94,15.71,102.04,7.12.83,14.51-.92,20.45-4.32-7.27-69.97-17.13-147.02-65.62-172.6-41.89-22.1-92.54-28.04-133.23-54.93-8.94,1.57-17.88,3.14-26.45,5.09,33.34,28.76,92.89,53.9,136.08,62.45"/>
                <path className="cls-3" d="M158.18,662s0-.03,0-.04"/>
                <g>
                    <path className="cls-1" d="M185.96,558.51c0-.06.01-.12.02-.18.04-.36.06-.55-.02.18Z"/>
                    <path className="cls-1"
                          d="M622.05,248.74c-.05-.46-.23-.91-.58-1.25-1.65-1.85-3.51-5.64-5.17-9.19-2.35-4.74-3.55-7.35-5.09-11.55-4.44-11.52-8.03-23.36-10.59-35.45-3.43-17.43-4.47-34.41-9.4-52.51-1.34-5.76-3.21-11.37-5.28-16.91-1.58-5.05-3.66-9.89-5.96-14.65-.78-1.79-2.47-6.48-4.25-9.66-2.37-4.36-5.19-8.46-8.08-12.49-3.96-5.54-9.16-10.04-14.65-13.99-8.09-6.05-16.99-10.96-26.12-15.21-8.93-3.6-17.93-7.14-27.26-9.58-15.26-3.67-30.5-7.51-45.48-12.24-5.28-1.68-13.22-4.16-16.51-5.66-10.41-4.96-20.53-10.51-30.52-16.26-5.06-2.75-10.05-5.81-15.29-8.12-.69-.14-1.4.18-1.85.71-.2-.07-.41-.11-.62-.11-1.3.1-2.29,1.23-3.51,1.65-3.22,1.48-4.43,2.06-8.18,3.33-3.34.92-6.47,2.45-9.85,3.25-4.29.93-8.41,2.56-12.77,3.21-6.8.76-19.98.41-28.87-.67-4.58-.47-12.67-2.29-18.69-4.49-1.84-.75-6.47-3.14-9.96-4.36-1.14-.32-2.34-1.22-4.25-1.84-.84-.16-1.52.23-1.93.83-.23.04-.45.12-.67.26-7.01,4.56-14.18,9-21.92,12.2-7.33,3.63-15.48,7.41-21.58,9.89-7.23,2.93-14.69,5.18-22.06,7.71-6.16,2.03-12.12,4.64-18.32,6.51-12.29,3.87-25.34,4.73-37.42,9.3-9.33,3.31-19,6.25-27.35,11.72-6.42,3.9-12.08,8.83-17.59,13.91-6.36,5.79-12.53,11.9-17.66,18.84-2.66,3.6-4.38,7.76-6.13,11.85-1.91,4.53-4.06,8.97-5.51,13.68-3.69,12.56-4.93,25.63-6.06,38.63-2.24,16.02-4.55,36.12-9.44,53.5-2.1,8.44-3.95,15.93-7.43,22.71-1.72,3.69-3.44,7.39-5.48,10.91-.39.67-.37,1.55.07,2.18-.15.66-.02,1.38.54,1.9,14.08,12.78,29.4,18.05,47.51,22.26,13.31,3.34,27.27,4.86,40.83,2.16,5.56-1,11.33-1.68,16.43-4.29,3.75-2.23,7.7-4.4,10.61-7.73.1-.08.19-.18.28-.28,1.84,8.05,2.18,15.49,2.64,24.63.2,7.8.68,15.59.73,23.4.77,23.04-.11,46.09.29,69.13.17,30.55.31,61.1.62,91.65-.1,16.52.95,33.03.88,49.55,0,9.35-.03,18.73-1.09,28.03-.36,2.85-.72,5.7-1.09,8.55-.03.25-.07.59-.1.73-.04.13-.04.27-.05.4-.92.56-1.4,1.86-.78,2.87.52.59,1.57,1.4,2.85,2.27,1.96,1.8,4.4,2.95,6.84,4.07,1.26.65,2.52,1.3,3.75,2,.76.3,1.52.8,2.31,1.06,8.75,4.53,18.11,7.65,27.24,11.29,4.84,1.85,9.9,2.98,14.89,4.33,5.01,1.35,9.96,2.97,15.03,4.06,6.94,1.22,13.94,2,20.85,3.41,7.63,1.27,15.32,1.99,23.01,2.8,5.25.75,14.23,2.05,21.37,2.14,9.93.14,19.87-.24,29.81.01,10.81.06,21.54-1.65,32.21-3.21,8.91-1.3,17.86-2.4,26.65-4.41,12.39-2.84,24.75-5.94,36.95-9.53,11.09-3.7,22.02-7.95,32.79-12.51,5.23-2.58,11.05-4.44,15.48-8.35.89-.89,1.61-1.94,2.32-2.97.29-.48.35-1.07.21-1.61-.02-.07-.06-.12-.08-.18.08-.78,0-1.59.06-2.35.03-3.57-.06-7.13-.15-10.7-.54-13.7-.65-27.41-.58-41.12-.11-17.2.18-34.39.34-51.59,0-11.54-.48-23.06-.75-34.6-.07-15.12-1.38-30.19-1.78-45.3.31-29.1.12-58.23,2.38-87.26.84-8.38,1.76-16.84,4.33-24.79.17.21.34.41.48.63,2.42,2.57,6.05,4.62,9.09,6.45,4.28,1.92,6.17,2.74,10.58,4.69,4.46,1.33,9.02,2.29,13.54,3.37,4.62.85,9.32.8,13.99.97,5.52.26,11.07.18,16.54-.66,5.84-.95,11.64-2.34,17.22-4.32,7.11-2.78,13.94-6.27,20.65-9.92,3.96-2.21,11.14-6.82,13.44-7.71.5-.19,1-.4,1.52-.52.06-.01.13-.02.19-.04.5-.06.99-.22,1.35-.61.84-.8.72-2.1.04-2.89ZM615.18,249.99c-2.9,1.57-5.71,3.31-8.53,5.01-6.36,3.82-13.06,7.06-19.79,10.15-9.89,4.24-23.79,7.03-36.26,6.05-3.71-.15-7.43-.1-11.11-.6-3.58-.55-7.04-1.68-10.58-2.41-3.9-.86-4.98-1.45-8.47-3.1-4.17-1.64-6.52-2.77-10.7-5.72-1.79-1.03-2.73-2.2-3.26-2.86-.45-.56-.81-1.27-1.42-1.65,1.08-2.57,2.36-5.07,3.93-7.48,3.95-6.09,6.3-14.36,10.55-20.26,1.79-2.74,2.88-7.18,4.34-9.9-3.05,3.92-7.4,9.09-9.44,12.24-2.13,3.39-3.85,7.02-5.87,10.47-3.16,5.46-6.77,10.71-8.7,16.79-3.72,11.28-4.72,23.26-5.45,35.05-.94,12.9-1.26,25.83-1.5,38.76.01,14.37-.47,28.75-.32,43.12.52,14.55,1.65,29.08,1.74,43.64.27,11.53.75,23.05.73,34.59-.15,15.77-.44,31.55-.34,47.33-.07,15.37.01,30.74.62,46.09.07,3.27.16,6.55.1,9.82,0,.69-.11,1.47-.03,2.17-1.6,2.29-4.1,3.7-8.16,5.63-5.75,2.71-9.63,4.52-14.69,6.49-8.37,3.12-16.62,6.62-25.15,9.28-9.22,2.83-18.64,4.93-27.95,7.43-10.72,2.72-21.62,4.58-32.58,6-9.63,1.43-16.99,2.61-27.14,3.31-7.11.39-14.24-.04-21.36.06-8.17.13-16.34.35-24.48-.48-4.67-.42-7.23-1-12.46-1.62-5.57-.6-11.15-1.07-16.69-1.88-3.96-.49-14.51-2.59-20.64-3.29-8.63-1.11-16.81-4.26-25.25-6.26-5.86-1.39-11.47-3.6-17.04-5.86-5.15-2-9.53-3.4-13.52-5.32-3.99-1.97-7.96-3.98-11.95-5.96-2.3-1.26-4.56-2.58-6.69-4.12.1-.16.18-.33.22-.52.27-1.94.51-3.88.76-5.82,1.56-10.67,1.7-21.48,1.67-32.24.09-11.89-.53-23.76-.72-35.64-.25-18.47-.49-36.95-.45-55.43-.18-21.33-.25-42.66-.54-63.99.21-12.76.32-25.53.21-38.29-.13-11.16-.33-22.33-.79-33.49-.33-10.26-.67-20.58-2.52-30.69-1.83-10.27-7-19.69-10.3-27.92.07.17.14.33.21.5-.78-1.89-1.57-3.77-2.35-5.65-.87-2.05-1.7-4.12-2.66-6.13-.46-.8-3.11-3.83-3.88-4.4-.37-.29-.65-.56-.87-.78.09.14.18.3.29.49,3.03,6.33,4.95,16.57,7.41,22.28,2.67,6.19,4.68,9.94,6.65,16.63,0,.01,0,.02,0,.03-1.84-.35-3.19,2.51-4.72,3.46-.9.64-5.31,3.74-7.97,5.01-2.33,1.22-8.72,2.57-13.06,3.25-5.79.93-8.81,1.56-14.72,1.59-12.84-.07-23.53-2.7-36.44-6.28-11.4-3.13-20.58-7.1-30.39-14.65-1.27-.91-1.52-1.22-3.42-2.79-.22-.17-.43-.37-.65-.57.08-.14.15-.28.23-.42.76-1.38,1.49-2.78,2.19-4.2,1.76-3.65,3.51-7.3,5.09-11.03,2.34-5.32,3.51-11.03,5.01-16.62,1.56-6.38,3.44-12.69,4.5-19.19,2.08-12.01,3.76-24.08,5.41-36.16.79-7.06,1.26-15,2.15-20.39.96-6.19,2.22-12.37,3.96-18.39,1.57-4.79,2.63-6.82,4.6-11.45,2.08-4.92,4.14-9.93,7.52-14.11,3.68-4.74,12.03-13.34,18.12-18.56,5.78-5.33,9.99-8.57,16.87-12.76,5.27-3.22,9.27-4.39,15.45-6.88,5.33-1.82,10.59-3.92,16.03-5.38,9.56-2.53,19.41-3.73,28.88-6.61,6.84-1.9,13.35-4.83,20.09-7.04,8.36-2.8,16.78-5.43,24.9-8.91,8.07-3.45,15.89-7.46,23.91-11.02,5.62-2.83,11.02-6.13,16.32-9.53.4-.28.84-.53,1.2-.85,2.59,1.22,6.69,2.75,7.22,3,2.58,1.22,5.1,2.58,7.83,3.43,9.48,3.15,19.41,4.55,29.37,4.89,6.33.27,12.72.44,19.01-.42,4.34-.72,8.46-2.32,12.75-3.24,3.1-.77,6-2.17,9.08-3.03,3.22-1.01,6.32-2.37,9.38-3.78.96-.53,2.38-1.01,3.14-1.88,5.7,2.98,11.36,6.05,16.93,9.27,9.49,5.39,19.09,10.7,29.02,15.22,8.81,3.48,17.96,6.03,27.01,8.8,12.54,3.66,25.28,6.56,37.91,9.85,5.69,1.6,11.21,3.72,16.73,5.81,5.66,2.1,9.09,3.53,14.68,6.65,12.98,6.96,25.21,14.88,32.45,25.7,2.78,4.01,5.51,8.09,7.64,12.5,1.2,2.4,1.95,4.97,3.56,8.44,2.44,4.88,3.5,7.91,5.39,13.49,2.38,6.07,4.1,12.34,5.68,18.66,1.18,4.97,2.18,9.98,3.25,14.97.83,5.88,2.02,13.02,2.54,17.2,1.58,11.97,3.91,23.86,7.44,35.4,3.75,12.69,8.52,25.12,14.81,36.76.43.74.93,1.44,1.44,2.12-.74.32-1.47.69-2.19,1.04Z"/>
                </g>
                <path className="cls-3" d="M158.18,662s0-.03,0-.04"/>
                <path className="cls-3" d="M158.18,662s0-.03,0-.04"/>
                <g>
                    <path className="cls-4" d="M185.96,558.51c0-.06.01-.12.02-.18.04-.36.06-.55-.02.18Z"/>
                    <path className="cls-4"
                          d="M622.05,248.74c-.05-.46-.23-.91-.58-1.25-1.65-1.85-3.51-5.64-5.17-9.19-2.35-4.74-3.55-7.35-5.09-11.55-4.44-11.52-8.03-23.36-10.59-35.45-3.43-17.43-4.47-34.41-9.4-52.51-1.34-5.76-3.21-11.37-5.28-16.91-1.58-5.05-3.66-9.89-5.96-14.65-.78-1.79-2.47-6.48-4.25-9.66-2.37-4.36-5.19-8.46-8.08-12.49-3.96-5.54-9.16-10.04-14.65-13.99-8.09-6.05-16.99-10.96-26.12-15.21-8.93-3.6-17.93-7.14-27.26-9.58-15.26-3.67-30.5-7.51-45.48-12.24-5.28-1.68-13.22-4.16-16.51-5.66-10.41-4.96-20.53-10.51-30.52-16.26-5.06-2.75-10.05-5.81-15.29-8.12-.69-.14-1.4.18-1.85.71-.2-.07-.41-.11-.62-.11-1.3.1-2.29,1.23-3.51,1.65-3.22,1.48-4.43,2.06-8.18,3.33-3.34.92-6.47,2.45-9.85,3.25-4.29.93-8.41,2.56-12.77,3.21-6.8.76-19.98.41-28.87-.67-4.58-.47-12.67-2.29-18.69-4.49-1.84-.75-6.47-3.14-9.96-4.36-1.14-.32-2.34-1.22-4.25-1.84-.84-.16-1.52.23-1.93.83-.23.04-.45.12-.67.26-7.01,4.56-14.18,9-21.92,12.2-7.33,3.63-15.48,7.41-21.58,9.89-7.23,2.93-14.69,5.18-22.06,7.71-6.16,2.03-12.12,4.64-18.32,6.51-12.29,3.87-25.34,4.73-37.42,9.3-9.33,3.31-19,6.25-27.35,11.72-6.42,3.9-12.08,8.83-17.59,13.91-6.36,5.79-12.53,11.9-17.66,18.84-2.66,3.6-4.38,7.76-6.13,11.85-1.91,4.53-4.06,8.97-5.51,13.68-3.69,12.57-4.93,25.63-6.06,38.63-2.24,16.02-4.55,36.12-9.44,53.5-2.1,8.44-3.95,15.93-7.43,22.71-1.72,3.69-3.44,7.39-5.48,10.91-.39.66-.37,1.55.07,2.18-.15.66-.02,1.38.54,1.9,14.08,12.78,29.4,18.05,47.51,22.26,13.31,3.34,27.27,4.86,40.83,2.16,5.56-1,11.33-1.68,16.43-4.29,3.86-2.29,7.93-4.52,10.86-8.01.02,0,.01,0,.04,0,1.84,8.05,2.18,15.49,2.64,24.63.2,7.8.68,15.59.73,23.4.77,23.04-.11,46.09.29,69.13.17,30.55.31,61.1.62,91.65-.1,16.52.95,33.03.88,49.55,0,9.35-.03,18.73-1.09,28.03-.36,2.85-.72,5.7-1.09,8.55-.03.25-.07.59-.1.73-.04.13-.04.27-.05.4-.92.56-1.4,1.86-.78,2.87.52.59,1.57,1.4,2.85,2.27,1.96,1.8,4.4,2.95,6.84,4.07,1.26.65,2.52,1.3,3.75,2,.76.3,1.52.8,2.31,1.06,8.75,4.53,18.11,7.65,27.24,11.29,4.84,1.85,9.9,2.98,14.89,4.33,5.01,1.35,9.96,2.97,15.03,4.06,6.94,1.22,13.94,2,20.85,3.41,7.63,1.27,15.32,1.99,23.01,2.8,5.25.75,14.23,2.05,21.37,2.14,9.93.14,19.87-.24,29.81.01,10.81.06,21.54-1.65,32.21-3.21,8.91-1.3,17.86-2.4,26.65-4.41,12.39-2.84,24.75-5.94,36.95-9.53,11.09-3.7,22.02-7.95,32.79-12.51,5.23-2.58,11.05-4.44,15.48-8.35.89-.89,1.61-1.94,2.32-2.97.29-.48.35-1.07.21-1.61-.02-.07-.06-.12-.08-.18.08-.78,0-1.59.06-2.35.03-3.57-.06-7.13-.15-10.7-.54-13.7-.65-27.41-.58-41.12-.11-17.2.18-34.39.34-51.59,0-11.54-.48-23.06-.75-34.6-.07-15.12-1.38-30.19-1.78-45.3.31-29.1.12-58.23,2.38-87.26.84-8.38,1.76-16.84,4.33-24.79.17.21.34.41.48.63,2.42,2.57,6.05,4.62,9.09,6.45,4.28,1.92,6.17,2.74,10.58,4.69,4.46,1.33,9.02,2.29,13.54,3.37,4.62.85,9.32.8,13.99.97,5.52.26,11.07.18,16.54-.66,5.84-.95,11.64-2.34,17.22-4.32,7.11-2.78,13.94-6.27,20.65-9.92,3.96-2.21,11.14-6.82,13.44-7.71.5-.19,1-.4,1.52-.52.06-.01.13-.02.19-.04.5-.06.99-.22,1.35-.61.84-.8.72-2.1.04-2.89ZM615.18,249.99c-2.9,1.57-5.71,3.31-8.53,5.01-6.36,3.82-13.06,7.06-19.79,10.15-9.89,4.24-23.79,7.03-36.26,6.05-3.71-.15-7.43-.1-11.11-.6-3.58-.55-7.04-1.68-10.58-2.41-3.9-.86-4.98-1.45-8.47-3.1-4.17-1.64-6.52-2.77-10.7-5.72-1.79-1.03-2.73-2.2-3.26-2.86-.45-.56-.81-1.27-1.42-1.65,1.08-2.57,2.36-5.07,3.93-7.48,3.95-6.09,6.3-14.36,10.55-20.26,1.61-2.48,2.67-6.33,3.93-9.06.02-.14.05-.28.07-.42-3.02,3.87-7.14,8.77-9.1,11.81-2.13,3.39-3.85,7.02-5.87,10.47-3.16,5.46-6.77,10.71-8.7,16.79-3.72,11.28-4.72,23.26-5.45,35.05-.94,12.9-1.26,25.83-1.5,38.76.01,14.37-.47,28.75-.32,43.12.52,14.55,1.65,29.08,1.74,43.64.27,11.53.75,23.05.73,34.59-.15,15.77-.44,31.55-.34,47.33-.07,15.37.01,30.74.62,46.09.07,3.27.16,6.55.1,9.82,0,.69-.11,1.47-.03,2.17-1.6,2.29-4.1,3.7-8.16,5.63-5.75,2.71-9.63,4.52-14.69,6.49-8.37,3.12-16.62,6.62-25.15,9.28-9.22,2.83-18.64,4.93-27.95,7.43-10.72,2.72-21.62,4.58-32.58,6-9.63,1.43-16.99,2.61-27.14,3.31-7.11.39-14.24-.04-21.36.06-8.17.13-16.34.35-24.48-.48-4.67-.42-7.23-1-12.46-1.62-5.57-.6-11.15-1.07-16.69-1.88-3.96-.49-14.51-2.59-20.64-3.29-8.63-1.11-16.81-4.26-25.25-6.26-5.86-1.39-11.47-3.6-17.04-5.86-5.15-2-9.53-3.4-13.52-5.32-3.99-1.97-7.96-3.98-11.95-5.96-2.3-1.26-4.56-2.58-6.69-4.12.1-.16.18-.33.22-.52.27-1.94.51-3.88.76-5.82,1.56-10.67,1.7-21.48,1.67-32.24.09-11.89-.53-23.76-.72-35.64-.25-18.47-.49-36.95-.45-55.43-.18-21.33-.24-42.66-.54-63.99.21-12.76.32-25.53.21-38.29-.13-11.16-.33-22.33-.79-33.49-.33-10.26-.67-20.58-2.52-30.69-1.83-10.27-7-19.69-10.3-27.92.07.17.14.33.21.5-.78-1.89-1.57-3.77-2.35-5.65-.87-2.05-1.7-4.12-2.66-6.13-.23-.41-1.03-1.38-1.86-2.32.04.92.08,1.83.1,2.72.02.75.03,1.51.03,2.26,1.64,5.33,3.05,11.13,4.68,14.93,2.67,6.2,4.68,9.95,6.66,16.66h0c-1.84-.35-3.19,2.51-4.72,3.46-.9.64-5.31,3.74-7.97,5.01-2.33,1.22-8.72,2.57-13.06,3.25-5.79.93-8.81,1.56-14.72,1.59-12.84-.07-23.53-2.7-36.44-6.28-11.4-3.13-20.58-7.1-30.39-14.65-1.27-.91-1.52-1.22-3.42-2.79-.22-.17-.43-.37-.65-.57.08-.14.15-.28.23-.42.76-1.38,1.49-2.78,2.19-4.2,1.76-3.65,3.51-7.3,5.09-11.03,2.34-5.32,3.51-11.03,5.01-16.62,1.56-6.38,3.44-12.69,4.5-19.19,2.08-12.01,3.76-24.08,5.41-36.16.79-7.06,1.26-15,2.15-20.39.96-6.19,2.22-12.37,3.96-18.39,1.57-4.79,2.63-6.82,4.6-11.45,2.08-4.92,4.14-9.93,7.52-14.11,3.68-4.74,12.03-13.34,18.12-18.56,5.78-5.33,9.99-8.57,16.87-12.76,5.27-3.22,9.27-4.39,15.45-6.88,5.33-1.82,10.59-3.92,16.03-5.38,9.56-2.53,19.41-3.73,28.88-6.61,6.84-1.9,13.35-4.83,20.09-7.04,8.36-2.8,16.78-5.43,24.9-8.91,8.07-3.45,15.89-7.46,23.91-11.02,5.62-2.83,11.02-6.13,16.32-9.53.4-.28.84-.53,1.2-.85,2.59,1.22,6.69,2.75,7.22,3,2.58,1.22,5.1,2.58,7.83,3.43,9.48,3.15,19.41,4.55,29.37,4.89,6.33.27,12.72.44,19.01-.42,4.34-.72,8.46-2.32,12.75-3.24,3.1-.77,6-2.17,9.08-3.03,3.22-1.01,6.32-2.37,9.38-3.78.96-.53,2.38-1.01,3.14-1.88,5.7,2.98,11.36,6.05,16.93,9.27,9.49,5.39,19.09,10.7,29.02,15.22,8.81,3.48,17.96,6.03,27.01,8.8,12.54,3.66,25.28,6.56,37.91,9.85,5.69,1.6,11.21,3.72,16.73,5.81,5.66,2.1,9.09,3.53,14.68,6.65,12.98,6.96,25.21,14.88,32.45,25.7,2.78,4.01,5.51,8.09,7.64,12.5,1.2,2.4,1.95,4.97,3.56,8.44,2.44,4.88,3.5,7.91,5.39,13.49,2.38,6.07,4.1,12.34,5.68,18.66,1.18,4.97,2.18,9.98,3.25,14.97.83,5.88,2.02,13.02,2.54,17.2,1.58,11.97,3.91,23.86,7.44,35.4,3.75,12.69,8.52,25.12,14.81,36.76.43.74.93,1.44,1.44,2.12-.74.32-1.47.69-2.19,1.04Z"/>
                </g>
            </g>
        </svg>
    );
}
export default ShirtSvg

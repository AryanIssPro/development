import socket

def create_raw_socket(destination_ip, source_ip):
    # Creating a raw socket
    raw_socket = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_RAW)
    
    # The raw packet will have a custom source IP
    raw_socket.bind(("0.0.0.0", 0))  # Bind to any available IP
    
    # Sending a packet with the spoofed IP
    packet = f"Packet with spoofed IP: {source_ip}"
    raw_socket.sendto(packet.encode(), (destination_ip, 80))  # Send to a destination
    
create_raw_socket("192.168.1.100", "10.0.0.5")

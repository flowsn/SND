import os
import posixpath
import stat
import paramiko

host = os.environ["SFTP_HOST"]
port = int(os.environ.get("SFTP_PORT", "22"))
username = os.environ["SFTP_USER"]
password = os.environ["SFTP_PASSWORD"]
remote_root = os.environ["SFTP_PATH"]
local_root = "dist"

transport = paramiko.Transport((host, port))
transport.connect(username=username, password=password)
sftp = paramiko.SFTPClient.from_transport(transport)

def ensure_remote_dir(path):
    parts = [p for p in path.split("/") if p]
    current = "/"
    for part in parts:
        current = posixpath.join(current, part)
        try:
            sftp.stat(current)
        except FileNotFoundError:
            sftp.mkdir(current)

def upload_tree(local_dir, remote_dir):
    ensure_remote_dir(remote_dir)
    for entry in os.scandir(local_dir):
        remote_path = posixpath.join(remote_dir, entry.name)
        if entry.is_dir():
            upload_tree(entry.path, remote_path)
        else:
            sftp.put(entry.path, remote_path)

upload_tree(local_root, remote_root)
sftp.close()
transport.close()

'use client'
import { Avatar, Badge, Button, Card, CardContent, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Card className="rounded-[8px] mb-6">
                <CardContent>
                    <div className='flex justify-between'>
                        <Button className='flex cursor-pointer align-middle items-center gap-2'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.15155 0.890945C8.37975 0.829158 8.62027 0.829158 8.84847 0.890945C9.11339 0.962672 9.33642 1.13778 9.51443 1.27753C9.53142 1.29087 9.548 1.30389 9.56418 1.31647L14.0857 4.83322C14.1031 4.84676 14.1204 4.86017 14.1375 4.87346C14.3886 5.06831 14.6098 5.23998 14.7747 5.46285C14.9193 5.65844 15.0271 5.87877 15.0927 6.11304C15.1674 6.37999 15.1671 6.65999 15.1667 6.97782C15.1667 6.99951 15.1667 7.02137 15.1667 7.04341V11.8924C15.1667 12.2438 15.1667 12.547 15.1463 12.7967C15.1248 13.0603 15.0772 13.3224 14.9487 13.5747C14.7569 13.951 14.451 14.257 14.0747 14.4487C13.8224 14.5772 13.5603 14.6248 13.2967 14.6463C13.047 14.6667 12.7438 14.6667 12.3924 14.6667H11.0333C11.0283 14.6667 11.0231 14.6667 11.0179 14.6667C10.9385 14.6667 10.8437 14.6668 10.7601 14.6599C10.6633 14.652 10.5247 14.6317 10.3794 14.5577C10.1912 14.4618 10.0382 14.3088 9.94234 14.1207C9.86831 13.9754 9.84801 13.8367 9.8401 13.7399C9.83327 13.6564 9.83331 13.5615 9.83334 13.4821L9.83335 9.0667C9.83335 8.86901 9.83283 8.76084 9.82648 8.68312C9.82622 8.68002 9.82597 8.6771 9.82571 8.67433C9.82295 8.67407 9.82002 8.67382 9.81692 8.67357C9.7392 8.66721 9.63103 8.6667 9.43334 8.6667H7.56668C7.36899 8.6667 7.26082 8.66721 7.1831 8.67357C7.18001 8.67382 7.17708 8.67407 7.17431 8.67433C7.17406 8.6771 7.1738 8.68002 7.17355 8.68312C7.1672 8.76084 7.16668 8.86901 7.16668 9.0667L7.16668 13.4821C7.16671 13.5615 7.16675 13.6564 7.15992 13.7399C7.15201 13.8367 7.13172 13.9754 7.05768 14.1207C6.96181 14.3088 6.80883 14.4618 6.62067 14.5577C6.47537 14.6317 6.33671 14.652 6.2399 14.6599C6.15636 14.6668 6.06152 14.6667 5.98211 14.6667C5.9769 14.6667 5.97175 14.6667 5.96668 14.6667H4.60763C4.25621 14.6667 3.95304 14.6667 3.70333 14.6463C3.43976 14.6248 3.17762 14.5772 2.92536 14.4487C2.54904 14.257 2.24308 13.951 2.05133 13.5747C1.9228 13.3224 1.87526 13.0603 1.85372 12.7967C1.83332 12.547 1.83333 12.2438 1.83334 11.8924L1.83334 7.04341C1.83334 7.02136 1.83332 6.9995 1.8333 6.97782C1.83295 6.65999 1.83265 6.37999 1.90737 6.11304C1.97295 5.87877 2.08071 5.65843 2.22537 5.46285C2.39021 5.23998 2.61142 5.06831 2.86251 4.87345C2.87964 4.86016 2.89691 4.84676 2.91431 4.83322L7.43585 1.31647C7.45202 1.30389 7.4686 1.29087 7.4856 1.27753C7.6636 1.13778 7.88664 0.962671 8.15155 0.890945ZM8.49515 2.18773C8.44504 2.2212 8.37904 2.27203 8.25444 2.36894L3.7329 5.88569C3.40085 6.14395 3.33901 6.19938 3.29735 6.25571C3.24913 6.32091 3.21321 6.39435 3.19135 6.47244C3.17247 6.53991 3.16668 6.62275 3.16668 7.04341V11.8667C3.16668 12.2511 3.1672 12.4992 3.18263 12.6881C3.19743 12.8692 3.22255 12.9364 3.23934 12.9694C3.30326 13.0948 3.40524 13.1968 3.53068 13.2607C3.56365 13.2775 3.63079 13.3026 3.8119 13.3174C4.00079 13.3328 4.24898 13.3334 4.63335 13.3334H5.83335L5.83334 9.04543C5.83332 8.87718 5.8333 8.71332 5.84464 8.57454C5.85709 8.42215 5.88647 8.24233 5.97867 8.06138C6.1065 7.81049 6.31047 7.60652 6.56136 7.47869C6.74231 7.38649 6.92213 7.35711 7.07453 7.34466C7.2133 7.33332 7.37717 7.33334 7.54542 7.33336H9.4546C9.62286 7.33334 9.78672 7.33332 9.9255 7.34466C10.0779 7.35711 10.2577 7.38649 10.4387 7.47869C10.6896 7.60652 10.8935 7.81049 11.0214 8.06138C11.1136 8.24233 11.1429 8.42215 11.1554 8.57454C11.1667 8.71332 11.1667 8.87718 11.1667 9.04544L11.1667 13.3334H12.3667C12.751 13.3334 12.9992 13.3328 13.1881 13.3174C13.3692 13.3026 13.4364 13.2775 13.4693 13.2607C13.5948 13.1968 13.6968 13.0948 13.7607 12.9694C13.7775 12.9364 13.8026 12.8692 13.8174 12.6881C13.8328 12.4992 13.8333 12.2511 13.8333 11.8667V7.04341C13.8333 6.62275 13.8276 6.53991 13.8087 6.47244C13.7868 6.39435 13.7509 6.32091 13.7027 6.25571C13.661 6.19938 13.5992 6.14395 13.2671 5.88569L8.74559 2.36894C8.62098 2.27203 8.55498 2.2212 8.50488 2.18773C8.50318 2.18659 8.50156 2.18552 8.50001 2.1845C8.49847 2.18552 8.49684 2.18659 8.49515 2.18773Z" fill="#3C6CE7" />
                            </svg>
                            <span>Dashboard</span>
                        </Button>
                        <Button className='flex cursor-pointer align-middle items-center gap-2'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.49999 2.66665C7.21133 2.66665 6.16666 3.71132 6.16666 4.99998C6.16666 6.28864 7.21133 7.33331 8.49999 7.33331C9.78866 7.33331 10.8333 6.28864 10.8333 4.99998C10.8333 3.71132 9.78866 2.66665 8.49999 2.66665ZM4.83333 4.99998C4.83333 2.97494 6.47495 1.33331 8.49999 1.33331C10.525 1.33331 12.1667 2.97494 12.1667 4.99998C12.1667 7.02502 10.525 8.66665 8.49999 8.66665C6.47495 8.66665 4.83333 7.02502 4.83333 4.99998ZM6.71751 9.66662C6.75555 9.66663 6.79415 9.66664 6.83333 9.66664H10.1667C10.2058 9.66664 10.2444 9.66663 10.2825 9.66662C11.1007 9.66631 11.6593 9.66611 12.1343 9.81018C13.1996 10.1333 14.0333 10.967 14.3565 12.0324C14.5005 12.5073 14.5003 13.066 14.5 13.8842C14.5 13.9222 14.5 13.9608 14.5 14C14.5 14.3682 14.2015 14.6666 13.8333 14.6666C13.4651 14.6666 13.1667 14.3682 13.1667 14C13.1667 13.0211 13.1594 12.6794 13.0805 12.4194C12.8866 11.7802 12.3864 11.28 11.7472 11.0861C11.4872 11.0072 11.1455 11 10.1667 11H6.83333C5.85445 11 5.5128 11.0072 5.25276 11.0861C4.61356 11.28 4.11335 11.7802 3.91945 12.4194C3.84056 12.6795 3.83333 13.0211 3.83333 14C3.83333 14.3682 3.53485 14.6666 3.16666 14.6666C2.79847 14.6666 2.49999 14.3682 2.49999 14C2.49999 13.9608 2.49998 13.9222 2.49997 13.8842C2.49966 13.066 2.49946 12.5073 2.64353 12.0324C2.96669 10.967 3.80037 10.1333 4.86571 9.81018C5.34065 9.66611 5.89932 9.66631 6.71751 9.66662Z" fill="#3C6CE7" />
                            </svg>

                            <span>Users</span>
                        </Button>
                        <Button className='flex cursor-pointer align-middle items-center gap-2'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.33913 0.666687H10.6609C11.1975 0.666679 11.6404 0.666672 12.0012 0.69615C12.3759 0.726767 12.7204 0.792476 13.044 0.957337C13.5457 1.213 13.9537 1.62095 14.2094 2.12271C14.3742 2.44627 14.4399 2.79074 14.4705 3.16547C14.5 3.52626 14.5 3.96917 14.5 4.50581V11.4942C14.5 12.0309 14.5 12.4738 14.4705 12.8346C14.4399 13.2093 14.3742 13.5538 14.2094 13.8773C13.9537 14.3791 13.5457 14.787 13.044 15.0427C12.7204 15.2076 12.3759 15.2733 12.0012 15.3039C11.6404 15.3334 11.1975 15.3334 10.6609 15.3334H6.33912C5.80248 15.3334 5.35958 15.3334 4.99878 15.3039C4.62405 15.2733 4.27958 15.2076 3.95603 15.0427C3.45426 14.787 3.04631 14.3791 2.79065 13.8773C2.62579 13.5538 2.56008 13.2093 2.52946 12.8346C2.49998 12.4738 2.49999 12.0309 2.5 11.4942V4.50582C2.49999 3.96917 2.49998 3.52627 2.52946 3.16547C2.56008 2.79074 2.62579 2.44627 2.79065 2.12271C3.04631 1.62095 3.45426 1.213 3.95603 0.957337C4.27958 0.792476 4.62405 0.726767 4.99878 0.69615C5.35958 0.666672 5.80249 0.666679 6.33913 0.666687ZM5.10736 2.02506C4.81508 2.04894 4.66561 2.09222 4.56135 2.14535C4.31046 2.27318 4.10649 2.47715 3.97866 2.72803C3.92553 2.8323 3.88225 2.98177 3.85837 3.27405C3.83385 3.57411 3.83333 3.9623 3.83333 4.53335V11.4667C3.83333 12.0377 3.83385 12.4259 3.85837 12.726C3.88225 13.0183 3.92553 13.1677 3.97866 13.272C4.10649 13.5229 4.31046 13.7269 4.56135 13.8547C4.66561 13.9078 4.81508 13.9511 5.10736 13.975C5.40742 13.9995 5.79561 14 6.36667 14H10.6333C11.2044 14 11.5926 13.9995 11.8926 13.975C12.1849 13.9511 12.3344 13.9078 12.4387 13.8547C12.6895 13.7269 12.8935 13.5229 13.0213 13.272C13.0745 13.1677 13.1178 13.0183 13.1416 12.726C13.1661 12.4259 13.1667 12.0377 13.1667 11.4667V4.53335C13.1667 3.9623 13.1661 3.57411 13.1416 3.27405C13.1178 2.98177 13.0745 2.8323 13.0213 2.72803C12.8935 2.47715 12.6895 2.27318 12.4387 2.14535C12.3344 2.09222 12.1849 2.04894 11.8926 2.02506C11.5926 2.00054 11.2044 2.00002 10.6333 2.00002H6.36667C5.79561 2.00002 5.40742 2.00054 5.10736 2.02506ZM5.16667 4.66669C5.16667 4.2985 5.46514 4.00002 5.83333 4.00002H11.1667C11.5349 4.00002 11.8333 4.2985 11.8333 4.66669C11.8333 5.03488 11.5349 5.33335 11.1667 5.33335H5.83333C5.46514 5.33335 5.16667 5.03488 5.16667 4.66669ZM5.16667 7.33335C5.16667 6.96516 5.46514 6.66669 5.83333 6.66669H9.83333C10.2015 6.66669 10.5 6.96516 10.5 7.33335C10.5 7.70154 10.2015 8.00002 9.83333 8.00002H5.83333C5.46514 8.00002 5.16667 7.70154 5.16667 7.33335ZM5.16667 10C5.16667 9.63183 5.46514 9.33335 5.83333 9.33335H7.16667C7.53486 9.33335 7.83333 9.63183 7.83333 10C7.83333 10.3682 7.53486 10.6667 7.16667 10.6667H5.83333C5.46514 10.6667 5.16667 10.3682 5.16667 10Z" fill="#3C6CE7" />
                            </svg>

                            <span>Transactions & Reports</span>
                        </Button>
                        <Button className='flex cursor-pointer align-middle items-center gap-2'
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.5 5.33331C7.02724 5.33331 5.83333 6.52722 5.83333 7.99998C5.83333 9.47274 7.02724 10.6666 8.5 10.6666C9.97276 10.6666 11.1667 9.47274 11.1667 7.99998C11.1667 6.52722 9.97276 5.33331 8.5 5.33331ZM7.16667 7.99998C7.16667 7.2636 7.76362 6.66665 8.5 6.66665C9.23638 6.66665 9.83333 7.2636 9.83333 7.99998C9.83333 8.73636 9.23638 9.33331 8.5 9.33331C7.76362 9.33331 7.16667 8.73636 7.16667 7.99998Z" fill="#3C6CE7" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.61544 2.57013C6.56766 2.86017 6.23196 2.99922 5.99308 2.82792C4.23663 1.56834 2.06835 3.73664 3.32792 5.49308C3.49922 5.73196 3.36017 6.06766 3.07013 6.11544C0.937482 6.46678 0.937478 9.5332 3.07013 9.88455C3.36017 9.93233 3.49922 10.268 3.32792 10.5069C2.06834 12.2634 4.23664 14.4316 5.99308 13.1721C6.23196 13.0008 6.56766 13.1398 6.61544 13.4299C6.96678 15.5625 10.0332 15.5625 10.3845 13.4299C10.4323 13.1398 10.768 13.0008 11.0069 13.1721C12.7634 14.4316 14.9316 12.2634 13.6721 10.5069C13.5008 10.268 13.6398 9.93233 13.9299 9.88455C16.0625 9.5332 16.0625 6.46678 13.9299 6.11544C13.6398 6.06766 13.5008 5.73196 13.6721 5.49308C14.9316 3.73664 12.7634 1.56834 11.0069 2.82792C10.768 2.99922 10.4323 2.86017 10.3845 2.57013C10.0332 0.437482 6.96678 0.437478 6.61544 2.57013ZM4.51848 4.88422C4.55687 4.95271 4.58997 5.02254 4.61798 5.09328C4.62164 5.10251 4.62521 5.11176 4.62869 5.12103C4.94536 5.96345 4.54643 6.92654 3.72683 7.29831C3.71782 7.30239 3.70875 7.30641 3.69964 7.31036C3.62981 7.34057 3.55703 7.36654 3.48145 7.38783C3.41849 7.40556 3.3536 7.42004 3.28687 7.43104C2.64301 7.53711 2.64301 8.46288 3.28687 8.56895C3.3536 8.57994 3.41849 8.59443 3.48145 8.61216C3.55703 8.63345 3.62981 8.65942 3.69964 8.68963C3.70875 8.69358 3.71782 8.69759 3.72683 8.70168C4.54643 9.07344 4.94536 10.0365 4.62869 10.879C4.62676 10.8841 4.6248 10.8892 4.62281 10.8944C4.62122 10.8985 4.61961 10.9026 4.61798 10.9067C4.58997 10.9774 4.55687 11.0473 4.51848 11.1158C4.4865 11.1728 4.45085 11.229 4.41144 11.2839C4.03117 11.8142 4.68579 12.4688 5.21607 12.0885C5.27103 12.0491 5.32716 12.0135 5.38422 11.9815C5.45271 11.9431 5.52254 11.91 5.59328 11.882C5.60251 11.8783 5.61176 11.8748 5.62103 11.8713C6.46345 11.5546 7.42654 11.9536 7.79831 12.7732C7.80239 12.7822 7.80641 12.7912 7.81035 12.8003C7.84057 12.8702 7.86654 12.943 7.88782 13.0185C7.90556 13.0815 7.92004 13.1464 7.93104 13.2131C8.03711 13.857 8.96288 13.857 9.06895 13.2131C9.07994 13.1464 9.09443 13.0815 9.11216 13.0185C9.13345 12.943 9.15942 12.8702 9.18963 12.8003C9.19358 12.7912 9.19759 12.7822 9.20168 12.7732C9.57344 11.9536 10.5365 11.5546 11.379 11.8713C11.3882 11.8748 11.3975 11.8783 11.4067 11.882C11.4774 11.91 11.5473 11.9431 11.6158 11.9815C11.6728 12.0135 11.729 12.0491 11.7839 12.0885C12.3142 12.4688 12.9688 11.8142 12.5885 11.2839C12.5491 11.229 12.5135 11.1728 12.4815 11.1158C12.4431 11.0473 12.41 10.9774 12.382 10.9067C12.3783 10.8975 12.3748 10.8882 12.3713 10.879C12.0546 10.0365 12.4536 9.07344 13.2732 8.70168C13.2822 8.69759 13.2912 8.69358 13.3003 8.68963C13.3702 8.65942 13.443 8.63345 13.5185 8.61216C13.5815 8.59443 13.6464 8.57994 13.7131 8.56895C14.357 8.46288 14.357 7.53711 13.7131 7.43104C13.6464 7.42004 13.5815 7.40556 13.5185 7.38782C13.443 7.36654 13.3702 7.34057 13.3003 7.31036C13.2912 7.30641 13.2822 7.30239 13.2732 7.29831C12.4536 6.92654 12.0546 5.96345 12.3713 5.12103C12.3748 5.11176 12.3783 5.10251 12.382 5.09328C12.41 5.02254 12.4431 4.95271 12.4815 4.88422C12.5135 4.82716 12.5491 4.77103 12.5885 4.71607C12.9688 4.18579 12.3142 3.53117 11.7839 3.91144C11.729 3.95086 11.6728 3.9865 11.6158 4.01848C11.5473 4.05687 11.4774 4.08997 11.4067 4.11798C11.3975 4.12164 11.3882 4.12521 11.379 4.12869C10.5365 4.44536 9.57344 4.04643 9.20168 3.22683C9.19759 3.21782 9.19358 3.20875 9.18963 3.19964C9.15942 3.12981 9.13345 3.05703 9.11216 2.98145C9.09443 2.91849 9.07994 2.8536 9.06895 2.78687C8.96288 2.14301 8.03711 2.14301 7.93104 2.78687C7.92004 2.8536 7.90556 2.91849 7.88782 2.98145C7.86654 3.05703 7.84057 3.12981 7.81036 3.19964C7.80641 3.20875 7.80239 3.21782 7.79831 3.22683C7.42654 4.04643 6.46345 4.44536 5.62103 4.12869C5.61176 4.12521 5.60251 4.12164 5.59328 4.11798C5.52254 4.08997 5.45271 4.05687 5.38422 4.01848C5.32716 3.9865 5.27103 3.95085 5.21607 3.91144C4.68579 3.53117 4.03117 4.18579 4.41144 4.71607C4.45085 4.77103 4.4865 4.82716 4.51848 4.88422Z" fill="#3C6CE7" />
                            </svg>

                            <span>Settings</span>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                        <Button className='flex cursor-pointer align-middle items-center gap-2 '>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.33315 2.51526C7.15681 1.46237 9.28672 1.42014 11.0726 2.21242C11.4091 2.36173 11.5609 2.7556 11.4116 3.09216C11.2623 3.42871 10.8684 3.5805 10.5318 3.43119C9.11882 2.80431 7.43879 2.83917 5.99981 3.66996C3.89574 4.88475 3.00861 7.39789 3.76614 9.61312L3.82772 9.38331C3.92301 9.02766 4.28857 8.81661 4.64422 8.9119C4.99986 9.0072 5.21092 9.37276 5.11562 9.7284L4.62759 11.5498C4.58183 11.7206 4.47009 11.8662 4.31697 11.9546C4.16385 12.043 3.98188 12.0669 3.81109 12.0212L1.98972 11.5331C1.63408 11.4378 1.42302 11.0723 1.51832 10.7166C1.61361 10.361 1.97917 10.1499 2.33482 10.2452L2.6048 10.3176C1.47236 7.4475 2.58073 4.10437 5.33315 2.51526ZM12.3725 4.44998C12.4678 4.09433 12.8334 3.88328 13.189 3.97857L15.0104 4.4666C15.366 4.5619 15.5771 4.92746 15.4818 5.2831C15.3865 5.63874 15.0209 5.8498 14.6653 5.75451L14.395 5.68208C15.5277 8.55225 14.4194 11.8956 11.6668 13.4848C9.84312 14.5377 7.71321 14.58 5.92738 13.7877C5.59083 13.6384 5.43904 13.2445 5.58835 12.9079C5.73766 12.5714 6.13153 12.4196 6.46809 12.5689C7.88111 13.1958 9.56114 13.1609 11.0001 12.3301C13.1042 11.1154 13.9913 8.60229 13.2338 6.38708L13.1724 6.61643C13.0771 6.97208 12.7115 7.18313 12.3559 7.08784C12.0002 6.99254 11.7892 6.62699 11.8845 6.27134L12.3725 4.44998Z" fill="#3C6CE7" />
                            </svg>

                            <span>Dispatch Management</span>
                        </Button>
                        <div className='flex gap-6 text-center'>
                            <IconButton
                                className="rounded-full w-9 h-9 bg-slate-300 flex items-center justify-center"
                            >
                                <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 10.6583C17.8689 12.0768 17.3366 13.4287 16.4652 14.5557C15.5939 15.6826 14.4196 16.5382 13.0798 17.0221C11.7399 17.5061 10.29 17.5984 8.89959 17.2884C7.50919 16.9784 6.23584 16.2788 5.22853 15.2715C4.22122 14.2642 3.52163 12.9908 3.2116 11.6004C2.90157 10.21 2.99394 8.76007 3.47789 7.42025C3.96185 6.08042 4.81737 4.90614 5.94435 4.03479C7.07134 3.16345 8.42317 2.63109 9.84168 2.5C9.01119 3.62356 8.61155 5.00787 8.71545 6.40118C8.81935 7.79448 9.41989 9.10422 10.4078 10.0922C11.3958 11.0801 12.7055 11.6807 14.0988 11.7846C15.4921 11.8885 16.8765 11.4888 18 10.6583V10.6583Z"
                                        stroke="#0E1726"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </IconButton>
                            <IconButton
                                className="rounded-full w-9 h-9 bg-slate-300 flex items-center justify-center"
                            >
                                <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 10.6583C17.8689 12.0768 17.3366 13.4287 16.4652 14.5557C15.5939 15.6826 14.4196 16.5382 13.0798 17.0221C11.7399 17.5061 10.29 17.5984 8.89959 17.2884C7.50919 16.9784 6.23584 16.2788 5.22853 15.2715C4.22122 14.2642 3.52163 12.9908 3.2116 11.6004C2.90157 10.21 2.99394 8.76007 3.47789 7.42025C3.96185 6.08042 4.81737 4.90614 5.94435 4.03479C7.07134 3.16345 8.42317 2.63109 9.84168 2.5C9.01119 3.62356 8.61155 5.00787 8.71545 6.40118C8.81935 7.79448 9.41989 9.10422 10.4078 10.0922C11.3958 11.0801 12.7055 11.6807 14.0988 11.7846C15.4921 11.8885 16.8765 11.4888 18 10.6583V10.6583Z"
                                        stroke="#0E1726"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </IconButton>
                            <IconButton
                                className="rounded-full w-9 h-9 bg-slate-300 flex items-center justify-center"
                            >
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.83329 3.33331H17.1666C18.0833 3.33331 18.8333 4.08331 18.8333 4.99998V15C18.8333 15.9166 18.0833 16.6666 17.1666 16.6666H3.83329C2.91663 16.6666 2.16663 15.9166 2.16663 15V4.99998C2.16663 4.08331 2.91663 3.33331 3.83329 3.33331Z" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.8333 5L10.5 10.8333L2.16663 5" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </IconButton>
                            <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
                                <IconButton
                                    className="rounded-full w-9 h-9 bg-slate-300 flex items-center justify-center"
                                >
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5 6.66669C15.5 5.3406 14.9732 4.06883 14.0355 3.13115C13.0979 2.19347 11.8261 1.66669 10.5 1.66669C9.17392 1.66669 7.90215 2.19347 6.96447 3.13115C6.02678 4.06883 5.5 5.3406 5.5 6.66669C5.5 12.5 3 14.1667 3 14.1667H18C18 14.1667 15.5 12.5 15.5 6.66669Z" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.9419 17.5C11.7954 17.7526 11.5851 17.9622 11.3321 18.1079C11.0791 18.2537 10.7922 18.3304 10.5003 18.3304C10.2083 18.3304 9.92142 18.2537 9.6684 18.1079C9.41539 17.9622 9.2051 17.7526 9.05859 17.5" stroke="#0E1726" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </IconButton>
                            </Badge>


                            <Avatar alt="Remy Sharp" className='flex items-center justify-center w-9 h-9' />
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Navbar
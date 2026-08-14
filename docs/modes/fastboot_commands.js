import fastbootGetvarAll from "@site/static/assets/fastboot/command_outputs/fastboot_getvar_all.txt";
import fastbootOemLks from "@site/static/assets/fastboot/command_outputs/fastboot_oem_lks.txt";
import fastbootContinue from "@site/static/assets/fastboot/command_outputs/fastboot_continue.txt";
import fastbootReboot from "@site/static/assets/fastboot/command_outputs/fastboot_reboot.txt";
import fastbootRebootBootloader from "@site/static/assets/fastboot/command_outputs/fastboot_reboot-bootloader.txt";
import fastbootRebootRecovery from "@site/static/assets/fastboot/command_outputs/fastboot_reboot-recovery.txt";
import fastbootRebootFastboot from "@site/static/assets/fastboot/command_outputs/fastboot_reboot-fastboot.txt";
import fastbootErase from "@site/static/assets/fastboot/command_outputs/fastboot_erase.txt";
import fastbootFlash from "@site/static/assets/fastboot/command_outputs/fastboot_flash.txt";
import fastbootDownload from "@site/static/assets/fastboot/command_outputs/fastboot_download.txt";

export const commands = [
  {
    command: "fastboot getvar all",
    description: "Get all device variables",
    output: fastbootGetvarAll,
  },
  {
    command: "fastboot oem lks",
    description:
      "Return the lockstate of the bootloader (1 -> locked, 0 -> unlocked)",
    output: fastbootOemLks,
  },
  {
    command: "fastboot continue",
    description: "Resumes boot",
    output: fastbootContinue,
  },
  {
    command: "fastboot reboot [bootloader|recovery|fastboot]",
    description: "Reboots device into specific boot mode",
    output: fastbootReboot,
  },
  {
    command: "fastboot reboot-bootloader",
    description: "Reboots device into bootloader",
    output: fastbootRebootBootloader,
  },
  {
    command: "fastboot reboot-recovery",
    description: "Reboots device into recovery",
    output: fastbootRebootRecovery,
  },
  {
    command: "fastboot reboot-fastboot",
    description: "Reboots device into fastboot",
    output: fastbootRebootFastboot,
  },
  {
    command: "fastboot erase <partition-name>",
    description: "Erases a partition",
    output: fastbootErase,
  },
  {
    command: "fastboot flash <partition-name> <file>",
    description: "Flashes a partition",
    output: fastbootFlash,
  },
  {
    command: "fastboot download:<size>",
    description: "Initiates a data transfer of the specified size to the device",
    output: fastbootDownload,
  },
];

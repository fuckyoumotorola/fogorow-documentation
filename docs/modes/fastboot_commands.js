import fastbootBoot from "@site/static/assets/fastboot/command_outputs/fastboot_boot.txt";
import fastbootContinue from "@site/static/assets/fastboot/command_outputs/fastboot_continue.txt";
import fastbootDownload from "@site/static/assets/fastboot/command_outputs/fastboot_download.txt";
import fastbootErase from "@site/static/assets/fastboot/command_outputs/fastboot_erase.txt";
import fastbootFlash from "@site/static/assets/fastboot/command_outputs/fastboot_flash.txt";
import fastbootGetvarAll from "@site/static/assets/fastboot/command_outputs/fastboot_getvar_all.txt";
import fastbootReboot from "@site/static/assets/fastboot/command_outputs/fastboot_reboot.txt";
import fastbootRebootBootloader from "@site/static/assets/fastboot/command_outputs/fastboot_reboot-bootloader.txt";
import fastbootRebootFastboot from "@site/static/assets/fastboot/command_outputs/fastboot_reboot-fastboot.txt";
import fastbootRebootRecovery from "@site/static/assets/fastboot/command_outputs/fastboot_reboot-recovery.txt";
import fastbootOemBatterysnGet from "@site/static/assets/fastboot/command_outputs/fastboot_oem_batterysn_get.txt";
import fastbootOemCarrierGet from "@site/static/assets/fastboot/command_outputs/fastboot_oem_carrier_get.txt";
import fastbootOemCid from "@site/static/assets/fastboot/command_outputs/fastboot_oem_cid.txt";
import fastbootOemCidDigest from "@site/static/assets/fastboot/command_outputs/fastboot_oem_cid_digest.txt";
import fastbootOemConfigBatterysn from "@site/static/assets/fastboot/command_outputs/fastboot_oem_config_batterysn.txt";
import fastbootOemConfigCarrier from "@site/static/assets/fastboot/command_outputs/fastboot_oem_config_carrier.txt";
import fastbootOemConfigDualsim from "@site/static/assets/fastboot/command_outputs/fastboot_oem_config_dualsim.txt";
import fastbootOemConfigFac from "@site/static/assets/fastboot/command_outputs/fastboot_oem_config_fac.txt";
import fastbootOemConfigWallpaper from "@site/static/assets/fastboot/command_outputs/fastboot_oem_config_wallpaper.txt";
import fastbootOemDualsimGet from "@site/static/assets/fastboot/command_outputs/fastboot_oem_dualsim_get.txt";
import fastbootOemDumpPllkLog from "@site/static/assets/fastboot/command_outputs/fastboot_oem_dump_pllk_log.txt";
import fastbootOemEfuseEnable from "@site/static/assets/fastboot/command_outputs/fastboot_oem_efuse_enable.txt";
import fastbootOemFacGet from "@site/static/assets/fastboot/command_outputs/fastboot_oem_fac_get.txt";
import fastbootOemFlashinfo from "@site/static/assets/fastboot/command_outputs/fastboot_oem_flashinfo.txt";
import fastbootOemGetSocid from "@site/static/assets/fastboot/command_outputs/fastboot_oem_get_socid.txt";
import fastbootOemKeepalive from "@site/static/assets/fastboot/command_outputs/fastboot_oem_keepalive.txt";
import fastbootOemKey from "@site/static/assets/fastboot/command_outputs/fastboot_oem_key.txt";
import fastbootOemLks from "@site/static/assets/fastboot/command_outputs/fastboot_oem_lks.txt";
import fastbootOemMd5 from "@site/static/assets/fastboot/command_outputs/fastboot_oem_md5.txt";
import fastbootOemOffModeCharge from "@site/static/assets/fastboot/command_outputs/fastboot_oem_off-mode-charge.txt";
import fastbootOemP2u from "@site/static/assets/fastboot/command_outputs/fastboot_oem_p2u.txt";
import fastbootOemPrintkRatelimit from "@site/static/assets/fastboot/command_outputs/fastboot_oem_printk-ratelimit.txt";
import fastbootOemScpLogThruApUart from "@site/static/assets/fastboot/command_outputs/fastboot_oem_scp_log_thru_ap_uart.txt";
import fastbootOemScpStatus from "@site/static/assets/fastboot/command_outputs/fastboot_oem_scp_status.txt";
import fastbootOemSetActive from "@site/static/assets/fastboot/command_outputs/fastboot_oem_set_active.txt";
import fastbootOemSha256 from "@site/static/assets/fastboot/command_outputs/fastboot_oem_sha256.txt";
import fastbootOemShutdown from "@site/static/assets/fastboot/command_outputs/fastboot_oem_shutdown.txt";
import fastbootOemSsmDisableThinkshield from "@site/static/assets/fastboot/command_outputs/fastboot_oem_ssm_disable-thinkshield.txt";
import fastbootOemSsmDisableZerotouch from "@site/static/assets/fastboot/command_outputs/fastboot_oem_ssm_disable-zerotouch.txt";
import fastbootOemUltraflash from "@site/static/assets/fastboot/command_outputs/fastboot_oem_ultraflash.txt";
import fastbootOemUltraflashEn from "@site/static/assets/fastboot/command_outputs/fastboot_oem_ultraflash_en.txt";
import fastbootOemUsb2jtag from "@site/static/assets/fastboot/command_outputs/fastboot_oem_usb2jtag.txt";
import fastbootOemWallpaperGet from "@site/static/assets/fastboot/command_outputs/fastboot_oem_wallpaper_get.txt";

export const commands = [
  {
    command: "fastboot boot <boot-image> [ramdisk] [second]",
    description: "Boots an image without flashing it to the device",
    output: fastbootBoot,
  },
  {
    command: "fastboot continue",
    description: "Resumes boot",
    output: fastbootContinue,
  },
  {
    command: "fastboot download <size>",
    description:
      "Initiates a data transfer of the specified size to the device",
    output: fastbootDownload,
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
    command: "fastboot getvar all",
    description: "Get all device variables",
    output: fastbootGetvarAll,
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
    command: "fastboot reboot-fastboot",
    description: "Reboots device into fastboot",
    output: fastbootRebootFastboot,
  },
  {
    command: "fastboot reboot-recovery",
    description: "Reboots device into recovery",
    output: fastbootRebootRecovery,
  },
  {
    command: "fastboot oem batterysn get",
    description: "Returns the battery serial number stored on the device",
    output: fastbootOemBatterysnGet,
  },
  {
    command: "fastboot oem carrier get",
    description: "Returns the carrier stored on the device",
    output: fastbootOemCarrierGet,
  },
  {
    command: "fastboot oem cid",
    description: "Returns the formatted CID of the device's eMMC storage",
    output: fastbootOemCid,
  },
  {
    command: "fastboot oem cid digest",
    description: "Returns the MD5 digest of the device's eMMC CID",
    output: fastbootOemCidDigest,
  },
  {
    command: "fastboot oem config batterysn <new-sn>",
    description: "Updates the battery serial number stored on the device",
    output: fastbootOemConfigBatterysn,
  },
  {
    command: "fastboot oem config carrier [carrier]",
    description: "Updates the carrier stored on the device",
    output: fastbootOemConfigCarrier,
  },
  {
    command: "fastboot oem config dualsim <0|1>",
    description: "Enables or disables dual SIM support on the device",
    output: fastbootOemConfigDualsim,
  },
  {
    command: "fastboot oem config fac <0|1>",
    description: "Enables or disables Factory Mode on the device",
    output: fastbootOemConfigFac,
  },
  {
    command: "fastboot oem config wallpaper <0-9>",
    description:
      "Updates the wallpaper ID stored on the device (Maybe only supported in stock rom)",
    output: fastbootOemConfigWallpaper,
  },
  {
    command: "fastboot oem dualsim get",
    description:
      "Returns whether Dual SIM support is enabled on the device (1 -> enabled, 0 -> disabled)",
    output: fastbootOemDualsimGet,
  },
  {
    command: "fastboot oem dump_pllk_log",
    description: "Dumps preloader and lk logs",
    output: fastbootOemDumpPllkLog,
  },
  {
    command: "fastboot oem efuse enable",
    description:
      "Enables the device's eFuse mechanism by invoking the bootloader's tinno_efuse_enable routine",
    output: fastbootOemEfuseEnable,
  },
  {
    command: "fastboot oem fac get",
    description:
      "Returns whether Factory Mode is enabled on the device (1 -> enabled, 0 -> disabled)",
    output: fastbootOemFacGet,
  },
  {
    command: "fastboot oem flashinfo",
    description:
      "Returns hardware information about the device's RAM and eMMC storage, including manufacturer, memory type, and capacity",
    output: fastbootOemFlashinfo,
  },
  {
    command: "fastboot oem get_socid",
    description: "Returns the unique id of the SoC",
    output: fastbootOemGetSocid,
  },
  {
    command: "fastboot oem keepalive",
    description:
      "Resets the Fastboot inactivity timeout, keeping the bootloader session alive",
    output: fastbootOemKeepalive,
  },
  {
    command: "fastboot oem key",
    description: "Set bootloader unlock key",
    output: fastbootOemKey,
  },
  {
    command: "fastboot oem lks",
    description:
      "Returns the lockstate of the bootloader (1 -> locked, 0 -> unlocked)",
    output: fastbootOemLks,
  },
  {
    command: "fastboot oem md5 [data]",
    description:
      "Calculates the MD5 digest of the specified data and returns it as a hexadecimal string",
    output: fastbootOemMd5,
  },
  {
    command: "fastboot oem off-mode-charge <0|1>",
    description:
      "Enables or disables charging behavior while the device is powered off (1 -> enabled, 0 -> disabled)",
    output: fastbootOemOffModeCharge,
  },
  {
    command: "fastboot oem p2u <on|off>",
    description: "Enabled or disables UART logs",
    output: fastbootOemP2u,
  },
  {
    command: "fastboot oem printk-ratelimit <on|off>",
    description:
      "Enables or disables rate limiting for printk log messages (on -> enabled, off -> disabled)",
    output: fastbootOemPrintkRatelimit,
  },
  {
    command: "fastboot oem scp_log_thru_ap_uart <1/0>",
    description: "Redirects SCP logs to UART",
    output: fastbootOemScpLogThruApUart,
  },
  {
    command: "fastboot oem scp_status <0|1>",
    description:
      "Changes the enabled state of the MediaTek System Companion Processor (SCP)",
    output: fastbootOemScpStatus,
  },
  {
    command: "fastboot oem set_active <value>",
    description: "Specific Tinno command (Stil dont know what it does)",
    output: fastbootOemSetActive,
  },
  {
    command: "fastboot oem sha256 [data]",
    description:
      "Calculates the SHA256 digest of the specified data and returns it as a hexadecimal string",
    output: fastbootOemSha256,
  },
  {
    command: "fastboot oem shutdown",
    description: "Shutdown the device",
    output: fastbootOemShutdown,
  },
  {
    command: "fastboot oem ssm disable-thinkshield",
    description:
      "Attempts to disable the device's ThinkShield/FDR security protection",
    output: fastbootOemSsmDisableThinkshield,
  },
  {
    command: "fastboot oem ssm disable-zerotouch",
    description:
      "Attempts to disable the device's ZeroTouch security protection",
    output: fastbootOemSsmDisableZerotouch,
  },
  {
    command: "fastboot oem ultraflash:<partition-name> <file>",
    description:
      "Flashes a partition using the bootloader's UltraFlash mechanism",
    output: fastbootOemUltraflash,
  },
  {
    command: "fastboot oem ultraflash_en <0|1>",
    description: "Enables or disables Ultraflash",
    output: fastbootOemUltraflashEn,
  },
  {
    command: "fastboot oem usb2jtag <0|1>",
    description: "Allows to use a modded usb cable as a JTAG",
    output: fastbootOemUsb2jtag,
  },
  {
    command: "fastboot oem wallpaper get",
    description: "Returns the wallpaper ID currently stored on the device",
    output: fastbootOemWallpaperGet,
  },
];

import React from 'react';

import { IconApartment } from '@/shared/icons/icon-set-1/icon_apartment';
import { IconBolt } from '@/shared/icons/icon-set-1/icon_bolt';
import { IconBookmark } from '@/shared/icons/icon-set-1/icon_bookmark';
import { IconBriefcase } from '@/shared/icons/icon-set-1/icon_briefcase';
import { IconCalculator } from '@/shared/icons/icon-set-1/icon_calculator';
import { IconCar } from '@/shared/icons/icon-set-1/icon_car';
import { IconChart } from '@/shared/icons/icon-set-1/icon_chart';
import { IconCog } from '@/shared/icons/icon-set-1/icon_cog';
import { IconCoin } from '@/shared/icons/icon-set-1/icon_coin';
import { IconControl } from '@/shared/icons/icon-set-1/icon_control';
import { IconCredit } from '@/shared/icons/icon-set-1/icon_credit';
import { IconCrop } from '@/shared/icons/icon-set-1/icon_crop';
import { IconCup } from '@/shared/icons/icon-set-1/icon_cup';
import { IconCustomer } from '@/shared/icons/icon-set-1/icon_customer';
import { IconDatabase } from '@/shared/icons/icon-set-1/icon_database';
import { IconDelivery } from '@/shared/icons/icon-set-1/icon_delivery';
import { IconDirection } from '@/shared/icons/icon-set-1/icon_direction';
import { IconFiles } from '@/shared/icons/icon-set-1/icon_files';
import { IconFunnel } from '@/shared/icons/icon-set-1/icon_funnel';
import { IconGallery } from '@/shared/icons/icon-set-1/icon_gallery';
import { IconGift } from '@/shared/icons/icon-set-1/icon_gift';
import { IconGraduation } from '@/shared/icons/icon-set-1/icon_graduation';
import { IconGraph } from '@/shared/icons/icon-set-1/icon_graph';
import { IconGrow } from '@/shared/icons/icon-set-1/icon_grow';
import { IconHand } from '@/shared/icons/icon-set-1/icon_hand';
import { IconHandsnake } from '@/shared/icons/icon-set-1/icon_handshake';
import { IconHappy } from '@/shared/icons/icon-set-1/icon_happy';
import { IconHourglass } from '@/shared/icons/icon-set-1/icon_hourglass';
import { IconImage } from '@/shared/icons/icon-set-1/icon_image';
import { IconInvest } from '@/shared/icons/icon-set-1/icon_invest';
import { IconInvestment } from '@/shared/icons/icon-set-1/icon_investment';
import { IconKey } from '@/shared/icons/icon-set-1/icon_key';
import { IconLayers } from '@/shared/icons/icon-set-1/icon_layers';
import { IconLibrary } from '@/shared/icons/icon-set-1/icon_library';
import { IconLicense } from '@/shared/icons/icon-set-1/icon_license';
import { IconLock } from '@/shared/icons/icon-set-1/icon_lock';
import { IconMagnifier } from '@/shared/icons/icon-set-1/icon_magnifier';
import { IconMap } from '@/shared/icons/icon-set-1/icon_map';
import { IconMarker } from '@/shared/icons/icon-set-1/icon_marker';
import { IconMoney } from '@/shared/icons/icon-set-1/icon_money';
import { IconNetwork } from '@/shared/icons/icon-set-1/icon_network';
import { IconOffer } from '@/shared/icons/icon-set-1/icon_offer';
import { IconPackage } from '@/shared/icons/icon-set-1/icon_package';
import { IconPaperclip } from '@/shared/icons/icon-set-1/icon_paperclip';
import { IconPencil } from '@/shared/icons/icon-set-1/icon_pencil';
import { IconPhone } from '@/shared/icons/icon-set-1/icon_phone';
import { IconPlane } from '@/shared/icons/icon-set-1/icon_plane';
import { IconPopup } from '@/shared/icons/icon-set-1/icon_popup';
import { IconPrinter } from '@/shared/icons/icon-set-1/icon_printer';
import { IconProtection } from '@/shared/icons/icon-set-1/icon_protection';
import { IconQuestion } from '@/shared/icons/icon-set-1/icon_question';
import { IconReact } from '@/shared/icons/icon-set-1/icon_react';
import { IconRoller } from '@/shared/icons/icon-set-1/icon_roller';
import { IconRuler } from '@/shared/icons/icon-set-1/icon_ruler';
import { IconSave } from '@/shared/icons/icon-set-1/icon_save';
import { IconService } from '@/shared/icons/icon-set-1/icon_service';
import { IconSmile } from '@/shared/icons/icon-set-1/icon_smile';
import { IconSort } from '@/shared/icons/icon-set-1/icon_sort';
import { IconStamp } from '@/shared/icons/icon-set-1/icon_stamp';
import { IconStar } from '@/shared/icons/icon-set-1/icon_star';
import { IconStatsDown } from '@/shared/icons/icon-set-1/icon_stats-down';
import { IconStatsUp } from '@/shared/icons/icon-set-1/icon_stats-up';
import { IconSupport } from '@/shared/icons/icon-set-1/icon_support';
import { IconTag } from '@/shared/icons/icon-set-1/icon_tag';
import { IconTarget } from '@/shared/icons/icon-set-1/icon_target';
import { IconTrain } from '@/shared/icons/icon-set-1/icon_train';
import { IconTravel } from '@/shared/icons/icon-set-1/icon_travel';
import { IconUsers } from '@/shared/icons/icon-set-1/icon_users';
import { IconVector } from '@/shared/icons/icon-set-1/icon_vector';
import { IconVideo } from '@/shared/icons/icon-set-1/icon_video';
import { IconWallet } from '@/shared/icons/icon-set-1/icon_wallet';
import { IconWarning } from '@/shared/icons/icon-set-1/icon_warning';
import { IconWhatsapp } from '@/shared/icons/icon-set-1/icon_whatsapp';
import { IconWrite } from '@/shared/icons/icon-set-1/icon_write';
import { IconZip } from '@/shared/icons/icon-set-1/icon_zip';

import { IconEmail } from './icon-set-1/icon_email';
import { IconPhone2 } from './icon-set-1/icon_phone_2';
import { IconSearch } from './icon-set-1/icon_search';

type Props = {
  name?: string;
  width?: number;
  height?: number;
  fill?: string;
};

export const IconSet: React.FC<Props> = ({
  name = 'apartment',
  width = 52,
  height = 52,
  fill = 'var(--primary)',
}) => {
  switch (name) {
    case 'stamp':
      return <IconStamp width={width} height={height} fill={fill} />;
    case 'sort':
      return <IconSort width={width} height={height} fill={fill} />;
    case 'target':
      return <IconTarget width={width} height={height} fill={fill} />;
    case 'tag':
      return <IconTag width={width} height={height} fill={fill} />;
    case 'support':
      return <IconSupport width={width} height={height} fill={fill} />;
    case 'stats-up':
      return <IconStatsUp width={width} height={height} fill={fill} />;
    case 'stats-down':
      return <IconStatsDown width={width} height={height} fill={fill} />;
    case 'star':
      return <IconStar width={width} height={height} fill={fill} />;
    case 'ruler':
      return <IconRuler width={width} height={height} fill={fill} />;
    case 'vector':
      return <IconVector width={width} height={height} fill={fill} />;
    case 'users':
      return <IconUsers width={width} height={height} fill={fill} />;
    case 'travel':
      return <IconTravel width={width} height={height} fill={fill} />;
    case 'email':
      return <IconEmail width={width} height={height} fill={fill} />;
    case 'train':
      return <IconTrain width={width} height={height} fill={fill} />;
    case 'write':
      return <IconWrite width={width} height={height} fill={fill} />;
    case 'video':
      return <IconVideo width={width} height={height} fill={fill} />;
    case 'wallet':
      return <IconWallet width={width} height={height} fill={fill} />;
    case 'warning':
      return <IconWarning width={width} height={height} fill={fill} />;
    case 'whatsapp':
      return <IconWhatsapp width={width} height={height} fill={fill} />;
    case 'zip':
      return <IconZip width={width} height={height} fill={fill} />;
    case 'smile':
      return <IconSmile width={width} height={height} fill={fill} />;
    case 'service':
      return <IconService width={width} height={height} fill={fill} />;
    case 'save':
      return <IconSave width={width} height={height} fill={fill} />;
    case 'pencil':
      return <IconPencil width={width} height={height} fill={fill} />;
    case 'offer':
      return <IconOffer width={width} height={height} fill={fill} />;
    case 'roller':
      return <IconRoller width={width} height={height} fill={fill} />;
    case 'network':
      return <IconNetwork width={width} height={height} fill={fill} />;
    case 'money':
      return <IconMoney width={width} height={height} fill={fill} />;
    case 'marker':
      return <IconMarker width={width} height={height} fill={fill} />;
    case 'popup':
      return <IconPopup width={width} height={height} fill={fill} />;
    case 'plane':
      return <IconPlane width={width} height={height} fill={fill} />;
    case 'phone':
      return <IconPhone width={width} height={height} fill={fill} />;
    case 'phone2':
      return <IconPhone2 width={width} height={height} fill={fill} />;
    case 'search':
      return <IconSearch width={width} height={height} fill={fill} />;
    case 'paperclip':
      return <IconPaperclip width={width} height={height} fill={fill} />;
    case 'package':
      return <IconPackage width={width} height={height} fill={fill} />;
    case 'map':
      return <IconMap width={width} height={height} fill={fill} />;
    case 'react':
      return <IconReact width={width} height={height} fill={fill} />;
    case 'question':
      return <IconQuestion width={width} height={height} fill={fill} />;
    case 'protection':
      return <IconProtection width={width} height={height} fill={fill} />;
    case 'printer':
      return <IconPrinter width={width} height={height} fill={fill} />;
    case 'library':
      return <IconLibrary width={width} height={height} fill={fill} />;
    case 'license':
      return <IconLicense width={width} height={height} fill={fill} />;
    case 'lock':
      return <IconLock width={width} height={height} fill={fill} />;
    case 'layers':
      return <IconLayers width={width} height={height} fill={fill} />;
    case 'key':
      return <IconKey width={width} height={height} fill={fill} />;
    case 'investment':
      return <IconInvestment width={width} height={height} fill={fill} />;
    case 'invest':
      return <IconInvest width={width} height={height} fill={fill} />;
    case 'image':
      return <IconImage width={width} height={height} fill={fill} />;
    case 'hourglass':
      return <IconHourglass width={width} height={height} fill={fill} />;
    case 'handsnake':
      return <IconHandsnake width={width} height={height} fill={fill} />;
    case 'hand':
      return <IconHand width={width} height={height} fill={fill} />;
    case 'grow':
      return <IconGrow width={width} height={height} fill={fill} />;
    case 'graph':
      return <IconGraph width={width} height={height} fill={fill} />;
    case 'graduation':
      return <IconGraduation width={width} height={height} fill={fill} />;
    case 'gift':
      return <IconGift width={width} height={height} fill={fill} />;
    case 'gallery':
      return <IconGallery width={width} height={height} fill={fill} />;
    case 'funnel':
      return <IconFunnel width={width} height={height} fill={fill} />;
    case 'files':
      return <IconFiles width={width} height={height} fill={fill} />;
    case 'apartment':
      return <IconApartment width={width} height={height} fill={fill} />;
    case 'direction':
      return <IconDirection width={width} height={height} fill={fill} />;
    case 'happy':
      return <IconHappy width={width} height={height} fill={fill} />;
    case 'magnifier':
      return <IconMagnifier width={width} height={height} fill={fill} />;
    case 'bolt':
      return <IconBolt width={width} height={height} fill={fill} />;
    case 'chart':
      return <IconChart width={width} height={height} fill={fill} />;
    case 'briefcase':
      return <IconBriefcase width={width} height={height} fill={fill} />;
    case 'calculator':
      return <IconCalculator width={width} height={height} fill={fill} />;
    case 'car':
      return <IconCar width={width} height={height} fill={fill} />;
    case 'customer':
      return <IconCustomer width={width} height={height} fill={fill} />;
    case 'crop':
      return <IconCrop width={width} height={height} fill={fill} />;
    case 'database':
      return <IconDatabase width={width} height={height} fill={fill} />;
    case 'cup':
      return <IconCup width={width} height={height} fill={fill} />;
    case 'cog':
      return <IconCog width={width} height={height} fill={fill} />;
    case 'control':
      return <IconControl width={width} height={height} fill={fill} />;
    case 'credit':
      return <IconCredit width={width} height={height} fill={fill} />;
    case 'delivery':
      return <IconDelivery width={width} height={height} fill={fill} />;
    case 'bookmark':
      return <IconBookmark width={width} height={height} fill={fill} />;
    case 'coin':
      return <IconCoin width={width} height={height} fill={fill} />;

    default:
      return <IconApartment width={width} height={height} fill={fill} />;
  }
};

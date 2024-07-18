// import dynamic from 'next/dynamic';
import React from 'react';

import { IconBookmark } from '@/shared/icons/icon-set-1/icon_bookmark';
import { IconCalculator } from '@/shared/icons/icon-set-1/icon_calculator';
import { IconCar } from '@/shared/icons/icon-set-1/icon_car';
import { IconCog } from '@/shared/icons/icon-set-1/icon_cog';
import { IconCoin } from '@/shared/icons/icon-set-1/icon_coin';
import { IconControl } from '@/shared/icons/icon-set-1/icon_control';
import { IconHandsnake } from '@/shared/icons/icon-set-1/icon_handshake';
import { IconKey } from '@/shared/icons/icon-set-1/icon_key';
import { IconLayers } from '@/shared/icons/icon-set-1/icon_layers';
import { IconLibrary } from '@/shared/icons/icon-set-1/icon_library';
import { IconLicense } from '@/shared/icons/icon-set-1/icon_license';
import { IconLock } from '@/shared/icons/icon-set-1/icon_lock';
import { IconOffer } from '@/shared/icons/icon-set-1/icon_offer';
import { IconSave } from '@/shared/icons/icon-set-1/icon_save';
import { IconService } from '@/shared/icons/icon-set-1/icon_service';
import { IconSmile } from '@/shared/icons/icon-set-1/icon_smile';
import { IconWallet } from '@/shared/icons/icon-set-1/icon_wallet';
import { IconWarning } from '@/shared/icons/icon-set-1/icon_warning';

import { IconApartment } from '../../icons/icon-set-1/icon_apartment';
import { IconBolt } from '../../icons/icon-set-1/icon_bolt';
import { IconBriefcase } from '../../icons/icon-set-1/icon_briefcase';
import { IconChart } from '../../icons/icon-set-1/icon_chart';
import { IconCredit } from '../../icons/icon-set-1/icon_credit';
import { IconCrop } from '../../icons/icon-set-1/icon_crop';
import { IconCup } from '../../icons/icon-set-1/icon_cup';
import { IconCustomer } from '../../icons/icon-set-1/icon_customer';
import { IconDatabase } from '../../icons/icon-set-1/icon_database';
import { IconDelivery } from '../../icons/icon-set-1/icon_delivery';
import { IconDirection } from '../../icons/icon-set-1/icon_direction';
import { IconFiles } from '../../icons/icon-set-1/icon_files';
import { IconFunnel } from '../../icons/icon-set-1/icon_funnel';
import { IconGallery } from '../../icons/icon-set-1/icon_gallery';
import { IconGift } from '../../icons/icon-set-1/icon_gift';
import { IconGraduation } from '../../icons/icon-set-1/icon_graduation';
import { IconGraph } from '../../icons/icon-set-1/icon_graph';
import { IconGrow } from '../../icons/icon-set-1/icon_grow';
import { IconHand } from '../../icons/icon-set-1/icon_hand';
import { IconHappy } from '../../icons/icon-set-1/icon_happy';
import { IconHourglass } from '../../icons/icon-set-1/icon_hourglass';
import { IconImage } from '../../icons/icon-set-1/icon_image';
import { IconInvest } from '../../icons/icon-set-1/icon_invest';
import { IconInvestment } from '../../icons/icon-set-1/icon_investment';
import { IconMagnifier } from '../../icons/icon-set-1/icon_magnifier';
import { IconMap } from '../../icons/icon-set-1/icon_map';
import { IconMarker } from '../../icons/icon-set-1/icon_marker';
import { IconMoney } from '../../icons/icon-set-1/icon_money';
import { IconNetwork } from '../../icons/icon-set-1/icon_network';
import { IconPackage } from '../../icons/icon-set-1/icon_package';
import { IconPaperclip } from '../../icons/icon-set-1/icon_paperclip';
import { IconPencil } from '../../icons/icon-set-1/icon_pencil';
import { IconPhone } from '../../icons/icon-set-1/icon_phone';
import { IconPlane } from '../../icons/icon-set-1/icon_plane';
import { IconPopup } from '../../icons/icon-set-1/icon_popup';
import { IconPrinter } from '../../icons/icon-set-1/icon_printer';
import { IconProtection } from '../../icons/icon-set-1/icon_protection';
import { IconQuestion } from '../../icons/icon-set-1/icon_question';
import { IconReact } from '../../icons/icon-set-1/icon_react';
import { IconRoller } from '../../icons/icon-set-1/icon_roller';
import { IconRuler } from '../../icons/icon-set-1/icon_ruler';
import { IconSort } from '../../icons/icon-set-1/icon_sort';
import { IconStamp } from '../../icons/icon-set-1/icon_stamp';
import { IconStar } from '../../icons/icon-set-1/icon_star';
import { IconStatsDown } from '../../icons/icon-set-1/icon_stats-down';
import { IconStatsUp } from '../../icons/icon-set-1/icon_stats-up';
import { IconSupport } from '../../icons/icon-set-1/icon_support';
import { IconTag } from '../../icons/icon-set-1/icon_tag';
import { IconTarget } from '../../icons/icon-set-1/icon_target';
import { IconTrain } from '../../icons/icon-set-1/icon_train';
import { IconTravel } from '../../icons/icon-set-1/icon_travel';
import { IconUsers } from '../../icons/icon-set-1/icon_users';
import { IconVector } from '../../icons/icon-set-1/icon_vector';
import { IconVideo } from '../../icons/icon-set-1/icon_video';
import { IconWhatsapp } from '../../icons/icon-set-1/icon_whatsapp';
import { IconWrite } from '../../icons/icon-set-1/icon_write';
import { IconZip } from '../../icons/icon-set-1/icon_zip';

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
